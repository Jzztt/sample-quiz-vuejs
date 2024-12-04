<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
        <div class="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
            <h1 class="text-2xl font-bold text-center mb-6">The Quiz</h1>

            <div v-if="!quiz.quizCompleted && quiz.questions.length > 0">
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
import { onMounted } from 'vue';

const quiz = useQuizStore();


onMounted(() => {
    quiz.fetchQuestions();
});
</script>

<style scoped></style>