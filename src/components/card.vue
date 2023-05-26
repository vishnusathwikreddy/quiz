<script setup>
    import { defineProps } from 'vue';
    import { useRouter } from 'vue-router';

    const props = defineProps({
        quiz: {
            type: Object,
            required: true
        }
    });

    const router = useRouter();

    const navigateToQuiz = () => {
        router.push(`/quiz/${props.quiz.id}`);
    }
</script>

<template>
    <div class="card" @click="navigateToQuiz">
        <img :src="props.quiz.img" class="quizimage"/>
        <div class="card-text">
            <h2>{{ props.quiz.name }}</h2>
            <p>{{ props.quiz.questions.length }} questions</p>
        </div>
    </div>
</template>

<style scoped>
    .card {
        width: 300px;
        overflow: hidden;
        border-radius: 2%;
        box-shadow: 1px 1px 10px rgba(128, 128, 128, 0.2);
        height: 240px;
        margin-top: 15px;
        margin-right: 20px;
        cursor: pointer;
        display: flex;
        flex-wrap: wrap;
    }

    .quizimage {
        height: 72%;
        width: 100%;
    }

    .card-text h2 {
        font-weight: bold;
    }

    .card-text {
        padding-left: 5px;
        padding-bottom: 5px;
    }
</style>
