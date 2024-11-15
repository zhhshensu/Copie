# 启动项目

## 启动

```bash
npm start
```

这一步会执行项目的 metro bundler，启动Metro 服务器
给出开发的平台去选择：

``` bash
i - run on iOS
a - run on Android
r - reload app
d - open Dev Menu
j - open DevTools
```

## 安卓平台

选择a, 安装平台，第一次会装安装相关的依赖。
比如这个

```bash
Downloading https://services.gradle.org/distributions/gradle-8.10.2-all.zip
```
这里可以修改android/gradle/warnings-disable.properties中的distributionUrl

```bash 
# distributionUrl=https\://services.gradle.org/distributions/gradle-8.10.2-all.zip
# 改成腾讯云镜像
distributionUrl=https://mirrors.cloud.tencent.com/gradle/gradle-8.10.2-all.zip
# 改成阿里云镜像
distributionUrl=https://mirrors.aliyun.com/macports/distfiles/gradle/gradle-8.10.2-all.zip
# 改成本地下载好的的文件
distributionUrl=/Users/xxxx/gradle/distributions/gradle-8.10.2-all.zip
```
下载后装后，执行一系列操作，打开模拟器，页面Ready.


#### 打包

略过签名等等步骤

生成apk, 进入android目录下执行

```bash
cd android
./gradlew bundleRelease
```

## ios平台

## 项目结构配置

1 新建app目录, 所有页面内容都归拢到app下开发

```bash
mkdir app
```

2 处理Ts别名，使用babel-plugin-module-resolver解析模块别名

安装开发依赖

```bash
npm install --save-dev babel-plugin-module-resolver
```
修改babel.config.js
```js
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  // 新增配置
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        extensions: ['.js', '.ts', '.tsx', '.json'],
        alias: {
          app: './app',
          '@axios': './app/utils/axios',
        },
      },
    ],
  ],
};

···
3、安装react-navigation路由等库，布局界面

```bash
npm install @react-navigation/native @react-navigation/native-stack react-native-safe-area-context react-native-screens
```

4、安装一个组件库, 这里使用tamagui

```bash
npm install tamagui
```

5、修改app.json

可以修改app的名字
注意：这里是个大坑，这样改不了名字，会报错 !!!

```js
(NOBRIDGE) ERROR  Invariant Violation: "app" has not been registered. This can happen if:
* Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.
* A module failed to load due to an error and `AppRegistry.registerComponent` wasn't called.
```
改了三处成功了
(1) 修改app.json, 2个都改了，暂时不清楚有啥区别

``` bash
{
  "name": "copie",
  "displayName": "copie"
}
```
(2) 修改andorid/app/src/main/res/values/strings.xml

```xml
<resources>
    <string name="app_name">copie</string>
</resources>

```

(3) 修改andorid/app/src/main/java/com/app/MainActivity.kt

```xml
override fun getMainComponentName(): String = "copie"
```


## 参考资料

- [React Native 修改国内镜像](https://blog.csdn.net/qq_44094296/article/details/135682127)
- [修改appName](https://stackoverflow.com/questions/34794679/change-app-name-in-react-native?rq=1)