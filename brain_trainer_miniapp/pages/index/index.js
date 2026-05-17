const GAME_URL = 'https://gitee.com/ljyjy5200/brain_trainer/raw/master/brain_trainer.html'

Page({
  data: {
    adUnitId: '', // 开通流量主后填入广告位 ID
    games: [
      { emoji: '🔢', name: '舒尔特方格', desc: '按顺序点击 1-25，训练注意力' },
      { emoji: '⚡', name: '反应力训练', desc: '看到变色立刻点击，测试反应速度' },
      { emoji: '🧮', name: '算术挑战', desc: '快速计算并选择正确答案' },
      { emoji: '🚦', name: '交通信号', desc: '红灯停绿灯行，考验抑制力' },
      { emoji: '🎨', name: '斯特鲁普测试', desc: '文字颜色干扰，锻炼认知控制' },
      { emoji: '🎵', name: '西蒙游戏', desc: '记忆并重复灯光序列' },
      { emoji: '👆', name: '选择反应', desc: '快速点击随机出现的目标' },
      { emoji: '🔟', name: '数字闪现', desc: '记住短暂出现的数字' },
      { emoji: '🖼️', name: '变化盲视', desc: '找出两张图片的不同之处' }
    ]
  },

  onLoad() {
    // 检查是否有广告位配置
    const app = getApp()
    if (app.globalData.adUnitId) {
      this.setData({ adUnitId: app.globalData.adUnitId })
    }
  },

  goToGame() {
    wx.navigateTo({
      url: '/pages/game/game?url=' + encodeURIComponent(GAME_URL)
    })
  }
})
