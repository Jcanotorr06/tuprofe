<template>
    <main>
        <ModalLogin v-if="modalStore.show && modalStore.modal === 'login'"/>
        <NavigationNavBar/>
        <Nuxt/>
    </main>
</template>

<script>
    import { useModeStore } from "~/store/mode";
    import { useModalStore } from "~~/store/modal";
    export default {
        data() {
            return {
                store: useModeStore(),
                modalStore: useModalStore(),
            }
        },
        head() {
            return {
                bodyAttrs: {
                    class: this.store.dark ? 'dark' : 'light'
                }
            }
        }
    }
</script>

<style lang="css">
  * {
    font-family: 'Josefin Sans';
  }
</style>