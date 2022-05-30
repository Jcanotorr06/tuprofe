import { defineStore } from "pinia";

export const useModeStore = defineStore({
    id: 'mode-store',
    state: () => ({
        mode: 'sun',
        backgroundColor: '#F5F5F5',
    }),
    actions: {
        swap() {
            if(this.mode === 'sun'){
                this.mode = 'moon'
                this.backgroundColor = '#040D19'
            }else{
                this.mode = 'sun'
                this.backgroundColor = '#F5F5F5'
            }
        }
    },
    getters: {
        getMode(state){
            return state.mode
        },
        getBackgroundColor(state){
            if(state.mode === 'light'){
                return '#777777'
            }
            return '#222222'
        }
    }
})