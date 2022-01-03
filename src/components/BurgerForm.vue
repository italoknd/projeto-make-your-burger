<template>
  <div class="form">
    <p>Pedido realizado com sucesso [msg futura]</p>
    <h1>Monte seu burger:</h1>
    <div>
      <form id="burger-form" @click="vazio_ainda">
        <div class="input-container">
          
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BurgerForm',
}
</script>

<style scoped>
  .form{

  }
</style>