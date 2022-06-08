<template>
<div class="fixed h-screen w-screen z-20">
    <div class="w-screen h-screen overlay z-50 fixed" @click="closeModal">
    </div>
    <div class="z-[100] lg:h-2/3 md:h-3/4 sm:h-4/5 h-screen container mx-auto grid grid-cols-1 surface p-10 rounded-lg centered border border-black">
        <div class="text-center">
            <h1 class="text-2xl font-bold">{{$t ('login_modal_title')}}</h1>
            <h4 class="text-md opacity-75">{{$t ('login_modal_desc')}}</h4>
        </div>
        <div class="my-1">
            <input type="email" name="email" class="px-4 py-3" :placeholder="$t('email_placeholder')" v-model="email">
        </div>
        <div class="my-1">
            <button class="button-primary font-semibold rounded-full px-7 py-2" :class="valid ? '' : 'button-disabled'" :disabled="!email || !email.match(/^[\w-\.]+@utp.ac.pa$/g)" @click="handleSubmit()">{{$t ('login_modal_submit')}}</button>
            <button class="button-text-primary font-semibold rounded-full px-7 py-2" @click="closeModal">{{$t ('login_modal_close')}}</button>
        </div>
    </div>
</div>
</template>

<script>
    import { useModalStore } from '~/store/modal'
    export default {
        data() {
            return {
                modalStore: useModalStore(),
                email: null,
                valid: 0
            }
        },
        methods: {
            closeModal() {
                this.modalStore.close()
            },
            async handleSubmit(){
                const res = await this.$supabase.auth.signIn({
                    email: this.email
                })
                console.log(res)
                if(!res.error){
                    let date = new Date()
                }
            }
        },
        watch: {
            email(val) {
                console.log(val)
                if(val.match(/^[\w-\.]+@utp.ac.pa$/g)){
                    this.valid = 1
                }else{
                    this.valid = 0
                }
            }
        }
    }
</script>