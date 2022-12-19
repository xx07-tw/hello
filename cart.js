// pages/cart/cart.js
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartItems: [],
    total: 0,
    checkAll: true
  },
  onShow:function(){
    var cartItems = wx.getStorageSync('carItems')
    this.setData({
      cartList: false,
      cartItems: cartItems
    })
    this.getsumTotal()
  },
  selectIcon:function(e){
    var cartItems = this.data.cartItems
    var index = e.currentTarget.dataset.index;
    var selected = carItems[index].selected;
    carItems[index].selected = !selected;
    this.setData({
      cartItems: cartItems
    })
    this.getsumTotal();
    wx.setStorageSync('cartItmes', cartItmes)
  },
  add: function(e){
    var cartItems = this.data.cartItems
    var index = e.currentTarget.dataset.index
    var value = cartItems[index].value
    value++
    cartItmes[index].value = value
    this.setData({
      cartItmes: cartItmes
    });
    this.getsumTotal()
    wx.setStorageSync('cartIems', cartItmes)
  },
  reduce: function(e){
    var cartItems = this.data.cartItems
    var index = e.currentTarget.dataset.index
    var value = cartItmes[index].value
    if(value == 1){
      value--;
      cartItmes[index].value = 1
    }else{
      value--
      cartItmes[index].value = value;
    }
    this.setData({
      cartItmes: cartItmes
    });
    this.getsumTotal()
      wx.setStorageSync('cartItems', cartItmes)
  },
  select: function(e){
    var checkAll = this.data.checkAll;
    checkAll = !checkAll
    var cartItmes = this.data.cartItems
    for(var i = 0;i < cartItems.length; i++){
      cartItems[i].selected = checkAll
    }
    this.setData({
      cartItmes: cartItmes,
      checkAll: checkAll
    })
    this.getsumTotal()
  },
  delete:function(e){
    var cartItmes = this.data.cartItems;
    var index = e.currentTarget.dataset.index;
    cartItmes.splice(index,1)
    this.setData({
      cartItmes: cartItmes
    });
    if(cartItmes.length){
      this.setData({
        cartList: false
      });
    }
    this.setsumTotal()
    wx.setStorageSync('cartItmes', cartItmes);
  },
  clearcar: function(e){
    this.setData({
      cartItmes:[],
      total: 0
    })
    wx.setStorageSync('cartItmes', [])
  },
  gopay:function(e){
    wx.setStorageSync('cartItmes', this.data.cartItmes)
    wx.setStorageSync('total', this.data.total)
    wx.navigateTo({
      url: '../../pages/pay/pay',
    })
  },
   getsumTotal:function(e){
    var cost = 0;
    for(var i = 0; i < this.data.cartItmes.length;i++){
      if(this.data.cartItmes[i].selected){
        cost += this.data.cartItmes[i].value * this .data.cartItems[i].price
      }
    }
    this.setData({
      total:cost
    })
   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})