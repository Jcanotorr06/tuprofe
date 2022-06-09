<template>
    <div>
        <nuxt-link to="/">Home</nuxt-link>
        ID = {{$route.params.id}}
        {{docente}}
        <nuxt-link :to="`/docente/${$route.params.id}/review`">{{$t ('review')}}</nuxt-link>

    </div>
</template>

<script>
import { useUserStore } from '~~/store/user'
export default {
  data() {
    return {
      docente: null,
    }
  },
  async fetch() {
    const docente = await this.$supabase.from('Docentes').select().eq('id', this.$route.params.id)
    if(!docente.error){
      this.docente = docente.data
    }
  }
}
</script>