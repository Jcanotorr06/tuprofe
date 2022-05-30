<template>
    <nav class="flex shadow-1 py-3 px-4 justify-content-between align-items-center">
        <nuxt-link to="/">
            <nuxt-img src="/logo_texto.svg" height="40" width="140"/>
        </nuxt-link>
        <div class="flex gap-3">
            <div class="flex gap-1">
                <button class="" @click="modalStore.open('signup')">{{$t ('signup')}}</button>
                <button class="" @click="modalStore.open('login')">{{$t ('login')}}</button>
            </div>
            <div class="">
                <button :icon="`pi pi-${modeStore.mode}`" class="" @click="modeStore.swap()" />
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