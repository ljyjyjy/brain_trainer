Page({
  data: {
    url: ''
  },

  onLoad(options) {
    if (options.url) {
      this.setData({ url: decodeURIComponent(options.url) })
    }
  },

  onMessage(e) {
    // 接收 web-view 发来的消息
    console.log('web-view message:', e.detail)
  }
})
