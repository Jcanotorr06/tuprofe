<template>
    <nav class="flex flex-grow drop-shadow w-screen py-3 px-4 justify-between items-center flex-wrap">
        <nuxt-link to="/">
            <nuxt-img src="/logo_texto.svg" height="40" width="140"/>
        </nuxt-link>
        <div class="flex gap-3">
            <div class="hidden md:flex gap-x-2">
                <button class="button-text-primary font-semibold rounded-full px-7 py-2" @click="modalStore.open('signup')">{{$t ('signup')}}</button>
                <button class="button-primary font-semibold rounded-full px-7 py-2" @click="modalStore.open('login')">{{$t ('login')}}</button>
            </div>
            <div class="flex items-center">
                <button class="button-text-primary flex justify-center items-center rounded-full p-2 text-lg  hover:scale-110 transition-transform duration-150 ease-in-out" @click="modeStore.swap()"><b-icon :icon="modeStore.dark ? 'moon-stars-fill' : 'brightness-high-fill'"/></button>
            </div>
        </div>
    </nav>
</template>

<script>
    import { useModeStore } from "~/store/mode";
    import { useModalStore } from "~/store/modal";
    export default {
        data() {
            return {
                modeStore: useModeStore(),
                modalStore: useModalStore()
            }
        }
    }
</script>