// pages/cart/cart.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    handleChooseAddress() {
        wx.chooseAddress({
            success: (result) => {
                console.log(result);
            }
        })



    }
})