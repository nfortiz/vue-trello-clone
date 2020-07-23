const board = {
    state: () => ({
        lists: []
    }),
    actions: {},
    mutations: {
        addList: function(state, newList) {
            state.lists.push(newList)
        },
        updateList: function(state, changed) {
            const itemOnNewPosition = state.lists[changed.newIndex]
            state.lists[changed.oldIndex] = itemOnNewPosition
            state.lists[changed.newIndex] = changed.element
        },
        updateAllList: function(state, value) {
            state.lists = value
        },
        addCardToList: function(state, { newCard, listId }) {
            state.lists.find(list => list.name === listId).cards.push(newCard)
        }
    },    
    getters: {}
}

export default board