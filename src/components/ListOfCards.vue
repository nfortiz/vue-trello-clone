<template>
    <v-card
        min-width="325"
        max-width="370"
        color="blue-grey lighten-4"
        class="mr-5"
        outlined
    >
        <v-card-title>
            {{ list.name }}
        </v-card-title>
        <draggable group="cards" :list="list.cards">
            <Card 
                v-for="(card, index) in list.cards"
                :card="card"
                :key="index"
            ></Card>
        </draggable>

        <v-divider class="mx-4"></v-divider>
        <v-card-text>
            <v-form v-on:submit.prevent>
                <v-text-field 
                    v-on:keyup.enter="addCard"
                    label="Add new cart"
                    solo
                ></v-text-field>
            </v-form>
        </v-card-text>
    </v-card>
</template>
<script>
import draggable from 'vuedraggable'
import Card from './Card'

export default {
    name: 'ListOfCards',
    components: {
        draggable,
        Card
    },
    props: {
        list: Object
    },
    methods: {
        addCard: function(event) {
            const listId = this.list.name
            this.$store.commit('addCardToList', { newCard: event.target.value, listId: listId })
        }
    }
}
</script>