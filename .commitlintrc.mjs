export default {
  plugins: ['commitlint-plugin-function-rules'],
  rules: {
    'header-max-length': [0], // level: disabled
    'function-rules/header-max-length': [
      2, // level: error
      'always',
      (parsed) => {
        header = parsed.header.replace(/\s\(#[0-9]+\)$/, '')

        if (header.length <= 72) {
          return [true];
        }
        else {
          return [false, 'header must not be longer than 72 characters excluding appended issues' + header];
        }
      },
    ],
  },
};
