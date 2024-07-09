export default {
  extends: ['@commitlint/rules'],
  rules: {
    'header-max-length': [2, 'always', 72],
  },
  plugins: [
    {
      rules: {
        'header-max-length': (parsed, _when, _value) => {
          parsed.header = parsed.header.replace(/\s\(#[0-9]+\)$/, '')
          return rules.default['header-max-length'](parsed, _when, _value)
        },
      },
    },
  ]
}
