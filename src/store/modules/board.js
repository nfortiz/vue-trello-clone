const board = {
    namespaced: true,
    state: () => ({
        lists: []
    }),
    actions: {},
    mutations: {
        addList: function(state, newList) {
            state.lists.push(newList)
        }
    },    
    getters: {}
}

export default board