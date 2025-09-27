<template>
  <!-- Todo form -->
  <form @submit.stop.prevent='addTodo' class="flex items-center px-4 bg-gray-900 h-15 
rounded-sm border-l-2 border-purple-400 mb-3">
    <input v-model='title' placeholder="Adicione um novo item ..." type="text" class="bg-gray-900 placeholder-gray-500 text-gray-500 
font-light focus:outline-none block w-full appearance-none leading-normal 
py-3 pr-3">

    <button class="text-purple-400 text-xs font-semibold 
focus:outline-none cursor-pointer" type="submit">
      ADICIONAR
    </button>
  </form>
  <!--/ Todo form -->
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
const title = ref('')
const addTodo = () => {
  if (!title?.value) return
  store.dispatch('addTodo', { title: title.value, completed: false }).finally(() => {
    title.value = ''
  })

}

</script>