
Page({

    /**
     * 页面的初始数据
     */
    data: {
        slideList:[],
        navList:[]
    },


//  wx.request({
//    请求地址
//    url: '',

//      请求的参数
//    data:''，

//   设置请求的header
//    header:{}，

//   请求方式
//    method:'GET',

//    数据类型
//    dataType:'json',

//    成功请求执行的回调函数

//    success:function(res){
//       console.log(res)
//    },

//    请求失败执行的回调函数
//    fail:function(res){
//      接口调用结束的回调函数（调用成功，失败都会执行）
//       complate:function(res){

//       }
//    }

//  })

   
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // console.log("A2:首页-监听页面加载-onLoad-1");
        /* 思考一下场景：
         *     我们需要从网上请求过来一些数据，显示在我们小程序上。
         *     请问：在小程序如此多的生命周期函数中，在哪里请求数据比较合适。
         */
        // JQ AJAX
        // $.ajax({
        //     url:"",
        //     success:function(){

        //     }
        // })
        // console.log("window",window);
        // console.log("document", document);
        // console.log("wx", wx);
        //1、请求轮播图
      wx.request({
        url: 'https://locally.uieee.com/slides',
        success:(res)=>{
          console.log(res);
         //this.slideList=res.data;
          // this.setData主要有两个功能：
          // 1、更新数据
          // 2、更新视图


         this.setData({
           slideList:res.data
         })

        // console.log(this.data.slideList)
        }
      });
//2、请求导航
    wx.request({
      url: 'https://locally.uieee.com/categories',
      success:(msg)=>{
         console.log(msg);
         this.setData({
           navList:msg.data
         })
      }
    })


    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        // console.log("B2:首页-监听页面初次渲染完成-onReady-3");
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        // console.log("C2:首页-监听页面显示-onShow-2");
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        console.log("D2:首页-监听页面隐藏");
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        console.log("E2:首页-监听页面卸载");
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

    }
})