// pages/goods_detail/goods_detail.js
import { request } from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodsObj: []
    },
    goodsInfo: [],

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {


        const { goods_id } = options;
        console.log(goods_id);

        this.getGoodDetail(goods_id)


    },

    async getGoodDetail(goods_id) {
        const res = await request({ url: "/goods/detail", data: { goods_id } });
        console.log(res);
        this.goodsInfo = res;
        this.setData({
            goodsObj: {
                goods_price: res.goods_price,
                goods_name: res.goods_name,
                pics: res.pics,
                goods_introduce: res.goods_introduce
            }
        })
        console.log(this.data.goodsObj);


    },
    handleCartAdd() {
        let cart = wx.getStorageSync('cart') || [];
        let index = cart.findIndex(v => v.goods_id === this.goodsInfo.goods_id);
        if (index === -1) {
            this.goodsInfo.num = 1;
            cart.push(this.goodsInfo)
        } else {
            cart[index].num++
        }
        wx.setStorageSync('cart', cart)
        wx.showToast({
            title: "加入成功",
            icon: "success",
            mask: "true"
        })
    }
})