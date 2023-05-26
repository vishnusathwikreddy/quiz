<script setup>
import question from "../components/question.vue"

import quizheader from "../components/quizheader.vue"
import { useRoute } from "vue-router";
import {ref,watch,computed} from "vue"
import quizes from "../data/quiz.json"
import result from "../components/result.vue"
const route=useRoute()
const quizid=parseInt(route.params.id)
const currentQuestionIndex=ref(0)
const quiz=quizes.find(q=>q.id===quizid)
const barPercentage=computed(()=>`${currentQuestionIndex.value/quiz.questions.length *100}%`)
const numberOfCorrectAnswers=ref(0)
const showResults=ref(false)
const questionStatus=computed(()=>{
    return `${currentQuestionIndex.value}/${quiz.questions.length}`
})

const onOptionSelected=(isCorrect)=>{
    if (isCorrect){
        numberOfCorrectAnswers.value++;
    }
    if(quiz.questions.length -1 ===currentQuestionIndex.value){
        showResults.value=true
    }

    currentQuestionIndex.value++;
}
</script>





<template>
    <div>
        <quizheader 
        :questionStatus="questionStatus"
        :barPercentage="barPercentage"
        />
        <div>
            <question 
            v-if="!showResults"
            :question="quiz.questions[currentQuestionIndex]"
            @selectOption="onOptionSelected"
            />
            <result 
                v-else
                :quizQuestionLength="quiz.questions.length"
                :numberOfCorrectAnswers="numberOfCorrectAnswers"
            />
        </div>

    </div>
</template>
