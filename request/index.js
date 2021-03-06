let ajaxTimes = 0;
export const request = (params) => {
    // 显示加载
    ajaxTimes++;
    wx.showLoading({
            title: "加载中",
            mask: true
        })
        // 定义公共的url
    const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1"
    return new Promise((resolve, reject) => {
        wx.request({
            ...params,
            url: baseUrl + params.url,
            success: result => {
                resolve(result.data.message)
                    // success
            },
            fail: err => {
                reject(err)
                    // fail
            },
            complete: () => {
                ajaxTimes--;
                if (ajaxTimes == 0) { wx.hideLoading(); }

            }
        })
    })
}