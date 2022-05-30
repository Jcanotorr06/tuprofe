import { defineStore } from "pinia";

export const useModalStore = defineStore({
    id: 'modal-store',
    state: () => ({
        show: false,
        modal: null,
    }),
    actions: {
        open(modal:String) {
            this.show = true
            this.modal = modal

        },
        close() {
            this.show = false
            this.modal = null
        }
    },
    getters: {
        getShow: state => state.show,
        getModal: state => state.modal
    }
})