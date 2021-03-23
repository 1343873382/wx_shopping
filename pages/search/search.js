import { request } from "../../request/index.js"
import regeneratorRuntime from '../../lib/runtime/runtime';
// pages/search/search.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goods: []
    },
    timeID: -1,
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },
    goodsSearch(e) {
        console.log(e.detail);
        let { value } = e.detail;
        if (!value.trim()) {
            return;
        }
        clearTimeout(this.timeID);
        this.timeID = setTimeout(() => {
            this.searchgoods(value)
        }, 500)

    },
    async searchgoods(query) {
        let res = await request({ url: "/goods/search", data: { query } });
        console.log(res);
        let { goods } = res;

        this.setData({
            goods
        })
        console.log(this.data.goods);
    }
})