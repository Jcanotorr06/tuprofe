<template>
    <div>
        <form class="border-2 shadow-sm flex flex-col" @submit.prevent="handleSubmit" v-if="userStore.user">
            <select name="subject" v-model="id_asignatura">
              <option value="" selected hidden>{{$t ('please_choose')}}</option>
              <option v-for="asignatura in asignaturas" :value="asignatura.id_asignatura" :key="asignatura.id_asignatura">
                {{`${asignatura.grupo} | ${asignatura.asignatura}`}}
              </option>
            </select>
            <label :for="$t ('rating')">{{$t ('rating')}}</label>
            <input v-model="rating" type="range" min="1" max="5" step="1" :name="$t ('rating')">
            <label :for="$t ('difficulty')">{{$t ('difficulty')}}</label>
            <input v-model="difficulty" type="range" min="1" max="5" step="1" :name="$t ('difficulty')">
            <label :for="$t ('wouldTakeAgain')">{{$t ('wouldTakeAgain')}}</label>
            <input v-model="wouldTakeAgain" type="checkbox" :name="$t ('wouldTakeAgain')">
            <label :for="$t ('isCredit')">{{$t ('isCredit')}}</label>
            <input v-model="isCredit" type="checkbox" :name="$t ('isCredit')">
            <label :for="$t ('useTextbook')">{{$t ('useTextbook')}}</label>
            <input v-model="useTextbook" type="checkbox" :name="$t ('useTextbook')">
            <label :for="$t ('attendanceMandatory')">{{$t ('attendanceMandatory')}}</label>
            <input v-model="attendanceMandatory" type="checkbox" :name="$t ('attendanceMandatory')">
            <label :for="$t ('grade')">{{$t ('grade')}}</label>
            <input v-model="grade" type="text" :name="$t ('grade')">
            <label :for="$t ('review')">{{$t ('review')}}</label>
            <textarea v-model="review" :name="$t ('review')" cols="30" rows="10"></textarea>

            <button type="submit" class="button-primary">{{$t ('submit')}}</button>
        </form>
    </div>
</template>

<script>
import { useUserStore } from '~~/store/user'
export default {
  middleware: 'authenticated',
  data() {
    return {
      userStore: useUserStore(),
      docente: null,
      asignaturas: [],
      id_asignatura: "",
      rating: 0,
      difficulty: 0,
      wouldTakeAgain: false,
      isCredit: false,
      useTextbook: false,
      attendanceMandatory: false,
      grade: '',
      review: '',

    }
  },
  methods: {
    async handleSubmit() {
      const {data, error} = await this.$supabase
        .from('Rating')
        .insert([{
          'id_docente': this.$route.params.id,
          'id_asignatura': this.id_asignatura,
          'rating': this.rating,
          'dificultad': this.difficulty,
          'wouldTakeAgain': this.wouldTakeAgain,
          'isCredit': this.isCredit,
          'useTextbooks': this.useTextbook,
          'attMandatory': this.attendanceMandatory,
          'nota': this.grade,
          'review': this.review,
          'id_user': this.$supabase.auth.currentUser.id
        }])
      if(!error){
        console.log('SUCCESS', data)
      }
    }
  },
  async fetch() {
    const docente = await this.$supabase.from('Docentes').select().eq('id', this.$route.params.id)
    if(!docente.error){
      this.docente = docente.data
    }

    const asignaturas = await this.$supabase.rpc('asignaturas_docente', {id_docente_in: this.$route.params.id})
    if(!asignaturas.error){
      this.asignaturas = asignaturas.data
    }
  }
}
</script>