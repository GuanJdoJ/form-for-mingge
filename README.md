# form-for-mingge

## 📦 安装与启动
1. 确保电脑已安装如下软件：
   - [git](https://git-scm.com/downloads)
   - [nodejs](https://nodejs.org)，推荐最新的 LTS 版本
2. 安装 nodejs 会自动安装 npm 包管理器，可以使用 npm 来执行之后的步骤，也可以使用 yarn：
```bash
    使用npm或yarn都行，此处以yarn举例
    npm install yarn -g
    yarn install # 安装依赖
    yarn run dev # 启动开发环境 本地测试
    yarn build # 打包生产环境 正式环境
```


## ⌨️ 调试
1. vue.config.js 中更改target的值为本地后台服务url
2. request.js 中需要调整TODO的内容


## ✨ 打包及部署
1. 执行yarn run build后，会在项目根目录生成/dist文件
2. 找到/dist/build/h5目录，/h5下即为所需要的静态文
3. 把/h5下所有文件放入服务器，能访问到index.html即可

