module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  // 0：忽略问题，即发出"off"警告;
  // 1：给出警告，即发出"warn"警告;
  // 2：直接报错，即发出"error"警告;
  rules: {
    indent: ['warn', 2], // 代码缩进为2个空格
    quotes: ['error', 'single'], // 代码中使用单引号包裹字符串
    semi: [2, 'never'], // 结尾不能有分号
    eqeqeq: 2, // 要求使用 === 和 !==
    'no-irregular-whitespace': 'warn', // 禁止不规则的空白
    'no-empty-pattern': 'warn', // 禁止使用空解构模式
    'no-redeclare': 'warn', // 禁止多次声明同一变量
    'no-class-assign': 'error', // 禁止修改类声明的变量
    'no-const-assign': 'error' // 禁止修改 const 声明的变量
  }
}
