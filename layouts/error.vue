<template>
    <div class="container">
        <h1 v-if="error.statusCode === 404">Ошибка 404</h1>
        <h1 v-else>Что-то пошло не так</h1>
        <nuxt-link to="/about">О компании</nuxt-link>
    </div>
</template>

<script>
    export default {
        name: "error",
        props: {
            error: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>