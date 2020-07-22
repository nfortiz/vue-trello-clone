<template>
   <v-card 
        class="mx-3 mb-3"
        raised 
    >
        <v-card-title>{{ card }}</v-card-title>
    </v-card> 
</template>
<script>
export default {
    name: 'Card',
    props: {
        card: String
    }
}
</script>