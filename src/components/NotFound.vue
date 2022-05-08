<template>
  <div>
    <h1>Ooops, parece que essa página não existe! :/</h1>
    <router-link to="/">
      <button>Voltar para a página inicial</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
div {
  height: 67.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

button {
  background: #252525;
  color: #fcac19;
  font-weight: bold;
  font-size: 1em;
  padding: 10px;
  border: 2px solid #252525;
  cursor: pointer;
  transition: 0.5s;
  margin: auto;
}

button:hover {
  background-color: #fcac19;
  color: whitesmoke;
  border: 2px solid #fcac19;
  border-radius: 3px;
}
</style>
