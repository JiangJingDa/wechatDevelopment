## **一、实验目标**

1、学习使用快速启动模板创建小程序的方法；2、学习不使用模板手动创建小程序的方法。

## 二、实验步骤

列出实验的关键步骤、代码解析、截图。

### 1.  使用快速启动模板创建小程序：

#### 1.1 创建项目：

![新建项目](D:\Screen photos\Snipaste_2022-08-17_10-59-17.png)

![新建项目](D:\Screen photos\Snipaste_2022-08-17_11-04-45.png)

#### 1.2 真机预览：

![真机预览](D:\Screen photos\Snipaste_2022-08-17_11-18-26.png)

### 2. 不使用模板手动创建小程序：

#### 2.1 创建项目：

![创建项目](D:\Screen photos\Snipaste_2022-08-17_11-30-50.png)

#### 2.2 删除和修改文件：

1. 删除app.json文件内pages属性中的“。pages/logs/logs”，并删除上一行末尾的逗号。

2. 删除utils文件夹及其内部所有内容。

3. 删除index.wxml和index.wxss中的全部代码。

4. 删除index.js中的全部代码，并且输入关键词“page”找到第二个选项按回车键让其自动补全函数。

5. 删除app.wxss中的全部代码。

6. 删除app.js中的全部代码，并且输入关键词“app”找到第一个选项按回车键让其自动补全函数。

#### 2.3 页面设计：

   ##### 2.3.1 导航栏设计

   在app.json中对window属性进行设计即可

   代码如下：

   ``` json
   "window":{
   
     "backgroundTextStyle":"light",
   
     "navigationBarBackgroundColor": "#fff",
   
     "navigationBarTitleText": "手动创建第一个小程序",
   
     "navigationBarTextStyle":"black"
   
    },
   ```

   ##### 2.3.2 页面设计

   使用如下组件进行页面设计：

   + 微信头像：<image>(图像)组件；
   
   + 微信昵称：<text>(文本)组件；
   
   + 按钮：<button>(按钮组件)；
   
     相关WXML（pages/index/index.wxml）代码片段如下：
   
     ```html
     <view class="container">
         <image></image>
         <text>Hellow World</text>
         <button>点击获取头像和昵称</button>
     </view>
     ```
     
     相关WXSS（pages/index/index.wxss）代码如下：
     
     ``` css
     .container{
       height: 100vh;                  /*高100视窗，这里写100%无效*/
       display: flex;                  /*flex布局模式*/
       flex-direction: column;         /*垂直布局*/
       align-items: center;            /*水平方向居中*/
       justify-content: space-around;  /*垂直方向分散布局*/
     }
     image{
       width: 300rpx;                  /*图片宽度*/
       border-radius: 50%;             /*4个角变为圆角形状*/
     }
     text{
       font-size: 50rpx;               /*字体大小*/
     }
     ```
     

#### 2.4逻辑实现：

##### 2.4.1 获取用户信息：

更改button按钮属性：

```css
 <button open-type="getUserInfo" bindtap="getMyInfo">  <!--open-type="getUserInfo"表示获取用户用户信息，然后使用bindtap属性将数据传给后面的函数-->
         点击获取头像和昵称
    </button>
```

在JS页面Page函数内部追加函数代码：

```js
getMyInfo: function(e){
      wx.getUserProfile({
        desc: '展示用户信息',
        success:(res) =>{
          console.log(res)
          this.setData({
            src:res.userInfo.avatarUrl,
            name:res.userInfo.nickName
          })
        }
      })
  }
```

##### 2.4.2使用动态数据显示头像和昵称：

在wxml页面修改<image>和<text>组件“{{}}”做动态数据

代码如下：

```html
 <image src="{{src}}" mode="widthFix"></image>
  <text>{{name}}</text>
```

为了显示原来的内容同时修改JS文件中的data

代码如下：

``` js
  data: {
    src:"/images/logo.png",
    name:"Hello World"
  },
```



## 三、程序运行结果

![](D:\Screen photos\Snipaste_2022-08-17_16-00-17.png)

![](D:\Screen photos\Snipaste_2022-08-17_16-00-25.png)

![](D:\Screen photos\Snipaste_2022-08-17_16-00-33.png)

## 四、问题总结与体会

描述实验过程中所遇到的问题，以及是如何解决的。有哪些收获和体会，对于课程的安排有哪些建议。

1. 了解到了CSS与html语言，学到了button组件与text等组件的使用，了解到了container容器的使用。
2. 了解到了如getUserProfile的接口及其使用方法