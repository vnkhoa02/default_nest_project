import * as markdownlint from 'markdownlint';
import * as fs from 'fs';

// Check if any Markdown files exist in the current directory
function checkMarkdownFiles(): boolean {
  const files = fs.readdirSync('.');
  return files.some(file => file.endsWith('.md'));
}

// Check if any Markdown files exist
if (!checkMarkdownFiles()) {
  console.error('ERROR: No Markdown files found!');
  process.exit(1);
}

const options = {
  files: ['*.md'],
};

markdownlint(options, function callback(err, result) {
  if (!err) {
    console.log(result.toString());
  } else {
    console.error(err.toString());
  }
});
