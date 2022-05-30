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
                store: useModeStore(),
            }
        }
    }
</script>

<style lang="css">
  * {
    font-family: 'Josefin Sans';
  }
</style>