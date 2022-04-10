<template>
  <div class="main-container">
    <h1>Gerenciar Pedidos:</h1>
    <DashboardPedidos />
  </div>
</template>

<script>
import DashboardPedidos from '../components/DashboardPedidos.vue'

export default {
  name: 'Pedidos',
  components:{
    DashboardPedidos,
  }
}
</script>

<style scoped>
  h1{
    margin-top: .5em;
  }
</style>