# 编写 ESLint 插件

我们以一个简单的需求为例，开发一个属于我们自己的 ESLint 插件。

需求：使用const声明基本类型的变量时，变量名不能出现小写字母。


测试项目我们可以继续使用在「安装与使用」章节创建的项目，首先运行`yarn link "eslint-plugin-const-variable-uppercase"`，把这个模块链接到我们编写的的本地插件。之后运行`yarn add eslint-plugin-const-variable-uppercase@link:1.0.0`把插件添加到package.json中。

```bash
// 在 eslint-plugin-const-variable-uppercase 根目录中
➜  eslint-plugin-const-variable-uppercase yarn link

// 在测试项目中
➜  eslint-plugin-demo yarn link "eslint-plugin-const-variable-uppercase"
➜  eslint-plugin-demo yarn add eslint-plugin-const-variable-uppercase@link:1.0.0
```