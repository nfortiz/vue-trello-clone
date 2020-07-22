<template>
    <div
        class="d-flex flex-row align-start my-5 mx-5"
    >
        <draggable v-model="lists" group="lists" class="d-flex flex-row flex-nowrap align-start">
            <ListOfCards  v-for="(list, index) in lists" :key="index" :list="list"/>
        </draggable>
        <v-form v-on:submit.prevent>
            <v-text-field 
                style="min-width: 350px"
                v-on:keyup.enter="addList"
                label="Add new cart"
                solo
            ></v-text-field>
        </v-form>
    </div>
</template>
<script>
import draggable from 'vuedraggable'
import ListOfCards from './ListOfCards'

export default {
    name: 'Board',
    components: {
        ListOfCards,
        draggable
    },
    data: function() {
        return {
            lists: []
        }
    },
    methods: {
        addList: function(event) {
            this.$data.lists.push(event.target.value)
        }
    }
}
</script>