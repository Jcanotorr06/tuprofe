<template>
    <main>
        <NavigationNavBar/>
        <Nuxt/>
    </main>
</template>

<script>
    import { useModeStore } from "~/store/mode";
    export default {
        data() {
            return {
                store: useModeStore()
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