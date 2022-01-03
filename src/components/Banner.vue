<template>
 <div id="main-banner">
   <h1 id="title">Make Your Burger!</h1>
 </div>
</template>

<script>
export default {
  name: "Banner",
}
</script>

<style scoped>
  #main-banner{
    background-image: url('/img/burger.jpg');
    background-position: 0 -150px;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    height: 800px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  #main-banner h1{
    background: #252525;
    color: whitesmoke;
    font-size: 60px;
    padding: 20px;
    border-bottom: 3px solid #FCAC19;
    border-right: 3px solid #FCAC19
  }
</style>