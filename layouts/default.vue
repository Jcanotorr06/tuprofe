<template>
    <body class="bg-gray-200 dark:bg-gray-700">
    <main>
        <NavigationNavBar/>
        <Nuxt/>
    </main>
    </body>
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