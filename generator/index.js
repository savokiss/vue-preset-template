module.exports = (api, options, rootOptions) => {
  // 修改 `package.json` 里的字段
  api.extendPackage({
    scripts: {
      test: 'vue-cli-service  command'
    }
  })

  // 复制并用 ejs 渲染 `./template` 内所有的文件
  api.render('../template')

  if (options.module === 'module1') { 
    // options.module 可以访问上面问题数组的第一个对象的值，默认为: 'module0'
    console.log(`Your choice is ${options.module}`)
  }

  if (options.moduleName === 'myModule') {
    // options.moduleName 可以访问到用户从控制台输入的文字
    console.log(`Your input is ${options.moduleName}`)
  }
}