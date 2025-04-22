<template>
    <div>
        <h1>Title</h1>
    <h2>Hi ID is {{id}}</h2>
    for Product {{ name }}
        
        
    </div>
</template>

<script setup>
//get id parameter from the route
const route = useRoute()

const {id,name} = route.params
</script>

<style lang="scss" scoped>

</style>