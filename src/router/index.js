//defining routing rules//
import { createRouter,createWebHistory } from "vue-router";
import questionview from "../views/questionview.vue"
import quizesview from "../views/quizesview.vue"
import error from "../components/error.vue"
const router= createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[{
        path:"/",
        component:quizesview
    },
    {
        path:"/home",
        redirect:"/"
    },
    {
        path:"/quiz/:id",
        component:questionview
    },
    {
        path:"/:catchall(.*)*",
        component:error
    }
    ]
})
export default router