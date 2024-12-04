<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
        <div class="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
            <h1 class="text-2xl font-bold text-center mb-6">The Quiz</h1>

            <div v-if="!quiz.quizCompleted">
                <QuizQuestion />
            </div>
            <div v-else>
                <QuizResult />
            </div>
        </div>
    </div>
</template>

<script setup>
import useQuizStore from '@/stores/quiz';
import QuizQuestion from './QuizQuestion.vue';
import QuizResult from './QuizResult.vue';

const quiz = useQuizStore();


</script>

<style scoped></style>