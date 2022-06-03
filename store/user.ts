import { defineStore } from "pinia";

export const useUserStore = defineStore({
    id: 'user-store',
    state: () => ({
        user: null
    }),
    actions: {
        setUser(user) {
            this.user = user
        },
        clearUser() {
            this.user = null
        }
    },
    getters: {
        getUser(state){
            return state.user
        },
    }
})