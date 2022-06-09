import { Context } from "@nuxt/types";

export default function(context:Context) {
    try {
        let user = context.nuxtState.pinia['user-store'].user
        console.log(context)
        if(!user){
            return context.redirect(`/docente/${context.params.id}`)
        }
    } catch (error) {
        return context.redirect(`/docente/${context.params.id}`)
    }
}