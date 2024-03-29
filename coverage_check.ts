import * as fs from 'fs';

interface ICoverageData {
  [filePath: string]: {
    path: string;
    statementMap: {
      [statementIndex: string]: IStatementMapObject;
    };
    fnMap: {
      [functionIndex: string]: IFnMapObject;
    };
    branchMap: object;
    s: {
      [key: string]: number;
    };
    f: {
      [key: string]: number;
    };
    b: object;
  };
}

interface IStatementMapObject {
  start: {
    line: number;
    column: number;
  };
  end: {
    line: number;
    column: number;
  };
}

interface IFnMapObject {
  name: string;
  decl: {
    start: {
      line: number;
      column: number;
    };
    end: {
      line: number;
      column: number;
    };
  };
  loc: {
    start: {
      line: number;
      column: number;
    };
    end: {
      line: number;
      column: number;
    };
  };
}

// Read the coverage data from a file
fs.readFile('coverage/coverage-final.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading coverage data:', err);
    process.exit(1); // Exit with error code
  }

  try {
    // Parse the coverage data
    const coverageData = JSON.parse(data) as ICoverageData[];
    const coverageThreshold = 90;

    for (const filePath in coverageData) {
      if (filePath.includes('module') || filePath.includes('main.ts')) {
        console.log(`Skipping coverage check for ${filePath}`);
        continue; // Skip this file
      }

      const fileCoverage = coverageData[filePath];
      const totalStatements = Object.keys(fileCoverage.statementMap).length;
      const coveredStatements = Object.values(fileCoverage.s).filter((value: unknown) => {
        if (typeof value === 'number') return value > 0;
        return false;
      }).length;
      const coveragePercentage = (coveredStatements / totalStatements) * 100;

      if (coveragePercentage < coverageThreshold) {
        console.log(`Coverage for ${filePath} is ${coveragePercentage.toFixed(2)}%. Committing not allowed.`);
        process.exit(1); // Exit with error code to prevent commit
      }
    }

    console.log(`All files meet coverage threshold (${coverageThreshold}%). Committing allowed.`);
    process.exit(0); // Exit with success code
  } catch (parseError) {
    console.error('Error parsing coverage data:', parseError);
    process.exit(1); // Exit with error code
  }
});
