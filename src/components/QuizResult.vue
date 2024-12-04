<template>
    <div class="text-center">
        <h2 class="text-2xl font-semibold mb-4">You have finished the quiz!</h2>
        <p class="text-lg">Your score is {{ score }}/{{ quiz.questions.length }}</p>
        <div class="mt-4">
            <button class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" @click="quiz.resetQuiz">
                Reset Quiz
            </button>
        </div>
    </div>
</template>

<script setup>
import useQuizStore from '@/stores/quiz';


const quiz = useQuizStore();

const score = quiz.score;
</script>

<style scoped></style>
