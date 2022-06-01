<template>
    <div>

    </div>
</template>

<script>
    import { useModalStore } from '~/store/modal'
    export default {
        data() {
            return {
                modalStore: useModalStore(),
            }
        }
    }
</script>