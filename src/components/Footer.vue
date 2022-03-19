<template>
  <div>
    <p>Created by <a href="https://www.linkedin.com/in/italo-pedroza/" rel="next" target="_blank">Italo Pedroza</a> &copy; 2022.</p>
  </div>
</template>

<script>
  export default {
    name: "Footer",
  }
</script>

<style scoped>
  div{
    background: rgba(0, 0, 0, 0.856);
    border-top: 4px solid rgba(0, 0, 0, 0.904);
    height: 225px;
    color: #fcba03;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }

  a{
    text-decoration: none;
    color: white;
  }

  a:visited{
    color: white;
  }
</style>