<template>
  <!-- Content -->
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <TodoHeader />

      <TodoSpinner v-if='loading' />

      <template v-else>


        <TodoFormAdd />

        <TodoItems v-if='store.state.todos.length' />

        <TodoEmpty v-else />
      </template>
    </div>
  </div>
  <!--/ Content -->
</template>
<script setup lang="ts">
import TodoEmpty from '@/components/TodoEmpty.vue';
import TodoFormAdd from '@/components/TodoFormAdd.vue';
import TodoItems from '@/components/TodoItems.vue';
import TodoSpinner from '@/components/TodoSpinner.vue';
import TodoHeader from '@/components/TodoHeader.vue';
import { ref } from 'vue';
import { useStore } from 'vuex';

const loading = ref(false);
const store = useStore();

loading.value = true;
store.dispatch('getTodos').then(() => loading.value = false);

</script>