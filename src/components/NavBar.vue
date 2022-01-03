<template>
  <div id="nav">
    <router-link to="/" id="logo_url">
      <img :src="logo" :alt="alt" id="logo">
    </router-link>
    <router-link to="/">Home</router-link>
    <router-link to="/pedidos">Pedidos</router-link>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    props:["logo", "alt"]
  }
</script>

<style scoped>
  #nav{
    background: rgba(0, 0, 0, 0.856);
    border-bottom: 4px solid rgba(0, 0, 0, 0.904);
    padding: 15px 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    /*position: sticky;
    top: 0;*/
  }

  #nav #logo_url{
    margin: auto;
    margin-left: -10px;
  }

  #logo{
    max-height: 50px;
  }

  #nav a{
    color: #fcba03;
    margin: 12px;
    transition: .3s;
    text-decoration: none;
  }

  #nav a:hover{
    color: white;
  }
</style>