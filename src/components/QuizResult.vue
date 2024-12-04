<template>
    <div class="text-center">
        <h2 class="text-2xl font-semibold mb-4">You have finished the quiz!</h2>
        <p class="text-lg">Your score is {{ score }}/{{ quiz.questions.length }}</p>

    </div>
</template>

<script setup>
import useQuizStore from '@/stores/quiz';


const quiz = useQuizStore();

const score = quiz.score;
</script>

<style scoped></style>
