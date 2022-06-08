<template>
  <div class="p-5">
    <div class="surface w-100 rounded-lg">
      <div class="w-100 surface shadow-lg rounded-lg px-32 py-5 flex justify-between items-center flex-wrap">
          <div class="flex h-100 items-center grow">
              <div class="bg-gray-400 flex justify-center items-center p-3 rounded-lg text-white">
                  <b-icon icon="book-half"/>
              </div>
              <div class="ml-3">
                  <div>
                    <h1 class="text-sm font-bold">{{$t ("amount_1")}}</h1>
                  </div>
                  <div>
                    <p class="text-xs">{{$t ("amount_desc_1")}}</p>
                  </div>
              </div>
          </div>
          <div class="flex h-100 items-center grow">
              <div class="bg-gray-400 flex justify-center items-center p-3 rounded-lg text-white">
                  <b-icon icon="book-half"/>
              </div>
              <div class="ml-3">
                  <div>
                    <h1 class="text-sm font-bold">{{$t ("amount_2")}}</h1>
                  </div>
                  <div>
                    <p class="text-xs">{{$t ("amount_desc_2")}}</p>
                  </div>
              </div>
          </div>
          <div class="grow-2 flex flex-col justify-center max-w-[50%]">
            <div>
              <h1 class="text-sm font-bold">{{$t ("welcome")}}</h1>
            </div>
            <div>
              <p class="text-xs">{{$t ("welcome_msg")}}</p>
            </div>
          </div>
      </div>
      <div>
        <div class="h-96">
          <nuxt-link to="/test">Test</nuxt-link>
          <div class="mt-3 flex flex-col w-full p-3">
            <input type="text" class="w-full text-lg p-3" :placeholder="$t ('search_placeholder')" v-model="input"/>
            <button class="button-primary py-3 px-4 rounded-full">{{$t ("search_button")}}</button>
          </div>
          <div v-if="userStore.user">
            <h3>USUARIO: {{userStore.user.id}}</h3>
            <img :src="`https://source.boringavatars.com/beam/40/${userStore.user.id}`" alt="">
          </div>
          <div class="mt-3">
            <ul v-for="docente in response" :key="docente.id">
              <nuxt-link :to="`/docente/${docente.id}`">{{docente.nombre}}</nuxt-link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { useUserStore } from '~~/store/user'
  export default {
    data(){
      return {
        input: null,
        response: null,
        userStore: useUserStore()
      }
    },
    watch: {
      async input(val){
        let query = ''
        if(val !== '' && val.length >= 3){
          console.log(query)
          const {data, error} = await this.$supabase.rpc('search_docente', {name: `${val}`})
          console.log(data)
          if(data.length > 0 && !error) {
            this.response = data.map(d => ({
              nombre: d.nombre,
              id: d.id
            }
            ))
          }
        }else{
          this.response = null
        }
      }
    }
  }
</script>
