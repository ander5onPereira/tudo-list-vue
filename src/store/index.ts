import axios from 'axios';
import { createStore } from 'vuex';

export interface State {
  todos: Array<any>;
}

const store = createStore<State>({
  state: {
    todos: [],
  },
  getters: {},
  mutations: {
    storeTodos(state, payload) {
      state.todos = payload;
    },
    storeTodo(state, payload) {
      const index = state.todos.findIndex((todo) => todo.id === payload.id);
      if (index >= 0) {
        state.todos.splice(index, 1, payload);
      } else {
        state.todos.push(payload);
      }
    },
    deleteTodo(state, payload) {
      const index = state.todos.findIndex((todo) => todo.id === payload);
      if (index >= 0) {
        state.todos.splice(index, 1);
      }
    },

  },
  actions: {
    async getTodos({ commit }) {
      return axios
        .get('http://localhost:3000/todos')
        .then((response) => commit('storeTodos', response.data));
    },
    async addTodo({ commit }, payload) {
      return axios
        .post('http://localhost:3000/todos', payload)
        .then((response) => commit('storeTodo', response.data));
    },
    async updateTodo({ commit }, { id, data }) {
      return axios
        .put(`http://localhost:3000/todos/${id}`, data)
        .then((response) => commit('storeTodo', response.data));
    },
    async deleteTodo({ commit }, id) {
      return axios
        .delete(`http://localhost:3000/todos/${id}`)
        .then((_response) => commit('deleteTodo', id));
    },
  },
  modules: {},
});

export default store;
