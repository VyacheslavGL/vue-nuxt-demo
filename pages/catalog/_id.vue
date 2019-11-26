<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Товар №{{$route.params.id}}
      </h1>
      <h2 class="subtitle">
        My shining Nuxt.js project
      </h2>
      <div class="links">
        <nuxt-link to="/" class="button--green">Главная</nuxt-link>
        <nuxt-link to="/about" class="button--green">О компании</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  head(){
    return{
      title: `Товар №${this.$route.params.id}`
    }
  }

}
</script>

