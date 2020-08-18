
const state = {
    checkLogin: true,
    nameApp: 'DEMO APP',
    domain: 'http://api.demo.vn/',
    authHeader: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    authHeaderApi: {
        'Authorization': ''
    }
}

const getters = {

}

const mutations = {
    setChangeLogin: (state, status) => state.checkLogin = status,
    setToken: (state, token) => state.authHeaderApi.Authorization = 'Bearer ' + token
}   

const actions = {
    setChangeLogin({ commit }, status) {
        commit('setChangeLogin', status)
    },
    setToken({ commit }, token) {
        commit('setToken', token)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
