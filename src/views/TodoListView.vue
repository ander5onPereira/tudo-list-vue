<template>
  <!-- Content -->
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <TodoHeader />

      <TodoSpinner v-if='loading' />

      <template v-else>


        <TodoFormAdd />

        <TodoItens v-if='$store.state.todos.length' />

        <TodoEmpty v-else />
      </template>
    </div>
  </div>

  <!--/ Content -->
</template>
<script>
import TodoEmpty from '@/components/TodoEmpty.vue';
import TodoFormAdd from '@/components/TodoFormAdd.vue';
import TodoItens from '@/components/TodoItens.vue';
import TodoSpinner from '@/components/TodoSpinner.vue';
import TodoHeader from '@/components/TodoHeader.vue';
import axios from 'axios';
export default {
  components: {
    TodoEmpty,
    TodoFormAdd,
    TodoItens,
    TodoSpinner,
    TodoHeader
  },
  data () {
    return {
      loading: false,
    }

  },

  created () {
    this.loading = true;
    this.$store.dispatch('getTodos').then(() => this.loading = false);

  }
}


</script>