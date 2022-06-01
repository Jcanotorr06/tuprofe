import { defineStore } from "pinia";

export const useLangStore = defineStore({
    id: 'lang-store',
    state: () => ({
        lang: 'es',
        isOpen: false,
    }),
    actions: {
        swap(code) {
            this.lang = code
            this.isOpen = false
        },
        toggle() {
            this.isOpen = !this.isOpen
        },
        close() {
            this.isOpen = false
        }
    },
    getters: {
        getLang(state){
            return state.lang
        },
        getOpen(state){
            return state.isOpen
        }
    }
})