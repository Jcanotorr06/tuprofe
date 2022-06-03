<template>
    <div class="relative">
        <button class="button-text-primary px-4 py-2 rounded-full select-none" @click="langStore.toggle" @blur="handleBlur">
            <span class="mr-3 uppercase">{{$i18n.locale}}</span>
            <b-icon icon="chevron-down"/>
        </button>
        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            <div v-if="langStore.isOpen" class="z-[100] surface fixed origin-top-right right-0 mt-2 w-56 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div v-for="locale in $i18n.locales" :key="locale.code" class="rounded-lg">
                    <button class="button-text-primary py-3 px-3 w-full select-none text-left" @click="swapLocale(locale.code)">
                        {{locale.name}}
                    </button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import { useLangStore} from "~/store/lang";
    export default {
        data() {
            return {
                langStore: useLangStore()
            }
        },
        methods: {
            swapLocale(code) {
                this.langStore.swap(code)
                this.$i18n.setLocale(code)
            },
            handleBlur(e){
                if(!e.relatedTarget){
                    this.langStore.close()
                }
            }
        },
    }
</script>