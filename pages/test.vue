<template>
    <div>
       <nuxt-link to="/">Home</nuxt-link>
       <p v-if="$fetchState.pending">{{$t ('loading')}}}</p>
       <p v-else>{{facultades}}</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      facultades: []
    }
  },
  methods: {
    async getFacultades() {
      this.facultades = await this.$supabase.from('Facultades').select('*')
    }
  },
  async fetch() {
    const {error, data} = await this.$supabase.from('Facultades').select('*')
    if(!error){
      this.facultades = data
    }
  },
  mounted: function () {
    //this.getFacultades()
  }
}
</script>