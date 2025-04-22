<template>
    <div>
        <h1>Title</h1>
    <h2>Hi this is {{id}}</h2>
        
        
    </div>
</template>

<script setup>
//get id parameter from the route
import { useRoute } from 'vue-router'
const route = useRoute()

const id = route.params.id
</script>

<style lang="scss" scoped>

</style>