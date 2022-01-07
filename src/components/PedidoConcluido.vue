<template>
  <div class="message-container">
    <p><strong>{{msg}}</strong></p>
  </div>
</template>

<script>
export default {
  name: "PedidoConcluido",
  props:{
    msg: String
  }
}
</script>

<style scoped>
 .message-container{
   color: #004085;
   background: #cce5ff;
   border: 2px solid #b8daff;
   border-radius: 5px;
   padding: 10px;
   margin: auto;
   max-width: 300px;
   margin-bottom: 30px;
   animation: fadeOut 10s;
 }

 @keyframes fadeOut {
   0%{
     opacity: 1;
   }25%{
     opacity: 1;
   }50%{
     opacity: 1;
   }75%{
     opacity: 0;
   }100%{
     opacity: 0;
     margin-bottom: -60px;
   }
 }
</style>