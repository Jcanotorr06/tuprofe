<template>
    <div>
       <nuxt-link to="/">Home</nuxt-link>
       <p>{{facultades}}</p>
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
  mounted: function () {
    this.getFacultades()
  }
}
</script>