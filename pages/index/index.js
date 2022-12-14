// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:"/images/logo.png",
    name:"Hello World"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  getMyInfo: function(e){
      wx.getUserProfile({
        //通过getUserProfile接口拿到用户信息
        desc: '展示用户信息',
        success:(res) =>{
          console.log(res)
          this.setData({
            src:res.userInfo.avatarUrl, //更新图片来源
            name:res.userInfo.nickName //更新昵称
          })
        }
      })
  }
})