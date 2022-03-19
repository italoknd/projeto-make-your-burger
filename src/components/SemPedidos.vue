<template>
  <div>
    <h2>Não há pedidos para serem mostrados.</h2>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  h2{
    text-align: center;
    margin-top: 20vh;
    animation: message 3s;
  }

  @keyframes message {
    from{
      opacity: 0;
    }to{
      opacity: 1;
    }
  }
</style>