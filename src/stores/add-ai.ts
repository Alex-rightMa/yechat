export const useAddAiStore = defineStore('add-ai', {
  state: () => {
    return { show: false }
  },
  actions: {
    toogle() {
      this.show = !this.show
    },
  },
})