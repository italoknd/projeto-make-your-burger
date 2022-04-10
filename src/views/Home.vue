<template>
  <div class="home">
    <div class="banner">
      <Banner />
    </div>
    <div class="main-container">
      <BurgerForm />
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import BurgerForm from '../components/BurgerForm.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    BurgerForm
  }
}
</script>

<style scoped>

</style>
