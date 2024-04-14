export const useAppStore = defineStore('chat-app', {
  state: () => {
    return { sysInfo: null }
  },
  actions: {
    init(info) {
      this.sysInfo = info
    },
  },
})