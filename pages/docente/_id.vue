<template>
    <div>
        <nuxt-link to="/">Home</nuxt-link>
        ID = {{$route.params.id}}
        {{docente}}

        <form class="border-2 shadow-sm">
            <input type="range" min="1" max="5" step="1" :name="$t ('rating')">
            <input type="range" min="1" max="5" step="1" :name="$t ('difficulty')">
            <input type="checkbox" :name="$t ('wouldTakeAgain')">
            <input type="checkbox" :name="$t ('isCredit')">
            <input type="checkbox" :name="$t ('useTextbook')">
            <input type="checkbox" :name="$t ('attendanceMandatory')">
            <input type="text" :name="$t ('grade')">
            <textarea :name="$t ('review')" cols="30" rows="10"></textarea>
        </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      docente: null,
      asignaturas: []
    }
  },
  async fetch() {
    const {error, data} = await this.$supabase.from('Docentes').select().eq('id', this.$route.params.id)
    if(!error){
      this.docente = data
    }
  }
}
</script>