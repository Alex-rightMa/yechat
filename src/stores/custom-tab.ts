const tabbarConfig = require('@/tabbar.config')

export const useCustomTabStore = defineStore('custom-tab', {
  state: () => {
    return { currentPath: tabbarConfig.list[0].pagePath, height: 0, }
  },
  actions: {
    setCurrentPath(path) {
      this.currentPath = path
    },
    setTabHeight(val) {
      this.height = val
    }
  },
})