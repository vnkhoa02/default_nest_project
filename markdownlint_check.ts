import * as markdownlint from 'markdownlint';

const options = {
  files: ['README.md'],
};

markdownlint(options, function callback(err, result) {
  if (!err) {
    console.log(result.toString());
  } else {
    console.error(err.toString());
  }
});
