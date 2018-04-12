const state = {
    creating: false
}

const mutations = {
    blogCreating (state) {
        state.creating = true
    },
    quitBlogCreating (state) {
        state.creating = false
    }
}

export default {
    state,
    mutations
}