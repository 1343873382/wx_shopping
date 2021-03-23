// import { request } from "../../request";
import { request } from "../../request/index.js"
//Page Object
Page({
    data: {
        swiperList: [],
        cateList: [],
        floorList: []
    },
    //options(Object)
    onLoad: function(options) {
        // wx.request({
        //     url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',

        //     // header: {}, // 设置请求的 header
        //     success:(res)=> {
        //        this.setData({
        //            swiperList:res.data.message
        //        })
        //     }

        // })
        this.getSwiperList();
        this.getCateList();
        this.getFloorList();
    },
    getSwiperList() {
        request({ url: "/home/swiperdata" })
            .then(result => {
                this.setData({
                    swiperList: result
                })
            })
    },
    getCateList() {
        request({ url: "/home/catitems" })
            .then(result => {
                this.setData({
                    cateList: result
                })
            })
    },
    getFloorList() {
        request({ url: "/home/floordata" })
            .then(result => {
                this.setData({
                    floorList: result
                })

            })
    },

    onReady: function() {

    },
    onShow: function() {

    },
    onHide: function() {

    },
    onUnload: function() {

    },
    onPullDownRefresh: function() {

    },
    onReachBottom: function() {

    },
    onShareAppMessage: function() {

    },
    onPageScroll: function() {

    },
    //item(index,pagePath,text)
    onTabItemTap: function(item) {

    }
});