<template>
    <div class="mb-6">
        <div class="text-lg font-semibold mb-4">{{ currentQuestion.question }}</div>
        <div class="space-y-2">
            <label v-for="(option, index) in currentQuestion.options" :key="index" :class="`block p-2 rounded border cursor-pointer hover:bg-gray-200 ${currentQuestion.selected === index
                ? index === currentQuestion.answer
                    ? 'bg-green-100 border-green-500'
                    : 'bg-red-100 border-red-500'
                : ''
                }`" @click="quizStore.setSelected(index)">
                <input type="radio" :value="index" v-model="currentQuestion.selected"
                    :disabled="currentQuestion.selected !== null" class="mr-2" />
                {{ option }}
            </label>
        </div>

        <div class="mt-4 flex justify-between">
            <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                @click="quizStore.nextQuestion" :disabled="currentQuestion.selected === null">
                {{ quizStore.quizCompleted ? 'Finish' : 'Next Question' }}
            </button>
        </div>
    </div>
</template>

<script setup>
import useQuizStore from '@/stores/quiz';
import { computed } from 'vue';


const quizStore = useQuizStore();
const currentQuestion = computed(() => quizStore.questions[quizStore.currentQuestion])

</script>

<style scoped></style>
