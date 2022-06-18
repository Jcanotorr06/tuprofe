<template>
    <nav class="flex flex-grow drop-shadow w-screen py-3 px-4 justify-between items-center flex-wrap">
        <nuxt-link to="/">
            <nuxt-img :src="modeStore.dark ? '/logo_texto_dark.svg' : '/logo_texto.svg'" height="40" width="140"/>
        </nuxt-link>
        <div class="flex gap-3">
            <div class="hidden md:flex gap-x-2">
                <button v-if="userStore.user" class="button-primary font-semibold rounded-full px-7 py-2" @click="logOut">{{$t ('logout')}}</button>
                <button v-else class="button-primary font-semibold rounded-full px-7 py-2" @click="modalStore.open('login')">{{$t ('login')}}</button>
            </div>
            <div class="flex items-center">
                <TranslationSelector/>
            </div>
            <div class="flex items-center">
                <button class="button-text-primary flex justify-center items-center rounded-full p-2 text-lg  hover:scale-110 transition-transform duration-150 ease-in-out" @click="modeStore.swap()">
                    <b-icon v-if="modeStore.dark" icon="moon-stars-fill"/>
                    <b-icon v-else icon="brightness-high-fill"/>
                </button>
            </div>
        </div>
    </nav>
</template>

<script>
    import { useModeStore } from "~/store/mode";
    import { useModalStore } from "~/store/modal";
    import { useUserStore } from "~~/store/user";
    export default {
        data() {
            return {
                modeStore: useModeStore(),
                modalStore: useModalStore(),
                userStore: useUserStore(),
            }
        },
        methods: {
            async logOut(){
                const res = await this.$supabase.auth.signOut()
                if(!res.error){
                    this.userStore.clearUser()
                }
            },
            async setUser() {
                if(!this.userStore.user){
                    if(this.$supabase.auth.currentUser) {
                        this.userStore.setUser(this.$supabase.auth.currentUser)
                        let {ip} = await fetch("https://www.myexternalip.com/json").then(res => res.json())
                        const up = await this.$supabase.auth.update({
                            data: {
                                ipAddress: ip
                            }
                        })
                        console.log('LOGGIN IN')
                    }else{
                        console.log('NOT LOGGED IN')
                    }
                }else{
                    console.log('ALREADY LOGGED IN')
                }
            }
        },
        mounted() {
            setTimeout(() => {
                this.setUser()

            }, 200)
        }
       /*  async fetch() {
            if(!this.userStore.user && this.$supabase.auth.currentUser){
                this.userStore.setUser(this.$supabase.auth.currentUser)
                console.log('USER SET')
            }else{
                console.log('ALREADY LOGGED IN')
            }
        } */
    }
</script>