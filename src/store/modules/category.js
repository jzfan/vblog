import category from '../../api/category'

const state = {
    tree: []
}

const getters = {
    categoryTree: state => state.tree
}

const actions = {
    getCategoryTree ({commit}) {
        category.tree( tree => commit('setCategoryTree', tree))
    }
}

const mutations = {
    setCategoryTree (state, tree) {
        state.tree = tree
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}