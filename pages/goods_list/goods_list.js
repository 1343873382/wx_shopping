import { request } from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
// pages/goods_list/goods_list.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: [{
                id: 0,
                value: "综合",
                isActive: true
            },
            {
                id: 1,
                value: "销量",
                isActive: false
            },
            {
                id: 2,
                value: "价格",
                isActive: false
            }
        ],
        goods_list: []
    },
    Queryparams: {
        query: '',
        cid: "",
        pagenum: 1,
        pagesize: 10
    },
    totalPage: 1,
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        console.log(options);
        this.Queryparams.cid = options.cid;
        this.getGoodsList();


    },
    handleTabsItemChange(e) {
        const { index } = e.detail;
        let { tabs } = this.data;
        tabs.forEach((v, i) =>
            i === index ? v.isActive = true : v.isActive = false

        );
        this.setData({ tabs })
    },
    async getGoodsList() {
        const res = await request({
            url: '/goods/search',
            data: this.Queryparams

        })
        let { total } = res;
        this.totalPage = Math.ceil(total / this.Queryparams.pagesize);
        console.log(res);
        console.log(total);


        this.setData({
            goods_list: [...this.data.goods_list, ...res.goods]
        });
        wx.stopPullDownRefresh()
    },
    onReachBottom() {
        if (this.Queryparams.pagenum >= this.totalPage) {
            wx.showToast({ title: "没有下一页数据了" })

        } else {
            this.Queryparams.pagenum++;
            this.getGoodsList()
        }
    },
    onPullDownRefreash() {
        this.setData({
            goods_list: []
        });
        this.Queryparams.pagenum = 1;
        this.getGoodsList();

    }


})