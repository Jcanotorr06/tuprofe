import { defineStore } from "pinia";

export const useModeStore = defineStore({
    id: 'mode-store',
    state: () => ({
        mode: 'sun',
        dark: false,
    }),
    actions: {
        swap() {
            if(this.mode === 'sun'){
                this.mode = 'moon'
                this.dark = true
            }else{
                this.mode = 'sun'
                this.dark = false
            }
        }
    },
    getters: {
        getMode(state){
            return state.mode
        },
        getDark(state){
            return state.dark
        }
    }
})