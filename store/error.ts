import { defineStore } from "pinia";

export const useErrorStore = defineStore({
    id: 'error-store',
    state: () => ({
        error: null,
        show: false,
    }),
    actions: {
        showError(error) {
            this.error = error
            this.show = true
            setTimeout(() => {
                this.error = null
                this.show = false
            }, 2000)
        },
        close() {
            this.show = false
        }
    },
    getters: {
        getError(state){
            return (
                state.error
            )
        },
        getShow(state){
            return (
                state.show
            )
        }
    }
})