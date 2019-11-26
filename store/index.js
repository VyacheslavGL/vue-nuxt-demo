import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default function () {
    return new Vuex.Store({
        state: {
            test: 'Hello',
        },
        mutations: {
            SET_TEST(state, value) {
                state.test = value;
            }
        },
        actions: {
            async GET_TEST({ state }) {
                return state.test
            },
            async LOAD_TEST({commit}){
                const words = ['Test', 'something', 'else'];
                commit('SET_TEST', words[~~(Math.random() * words.length)]);
            }
        }
    });
}