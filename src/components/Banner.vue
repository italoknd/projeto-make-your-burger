<template>
  <div id="main-banner">
    <h1 id="title">Make Your Burger!</h1>
  </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style scoped>
#main-banner {
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

#main-banner h1 {
  background: #252525;
  color: whitesmoke;
  font-size: 3.75em;
  padding: 1.25em;
  border-bottom: 3px solid #fcac19;
  border-right: 3px solid #fcac19;
}

@media (max-width: 320px) {
  #main-banner {
    background-position-x: -35em !important;
    background-position-y: center;
  }

  #main-banner h1 {
    font-size: 1.25em!important;
    padding: 15px;
    margin-top: 26em !important;
    margin-left: 0.2em !important;
  }
}

@media (max-width: 768px) {
  #main-banner {
    background-position-x: -25.6em!important;
    background-position-y: center!important;
    background-size: cover!important;
  }

  #main-banner h1 {
    font-size: 1.25em!important;
    padding: 0.9em 2.5em;
    margin-top: -34.5em;
  }
}

@media (min-width: 769px) {
  #main-banner {
    background-position: center center;
  }

  #main-banner h1 {
    font-size: 1.5em;
    padding: 0.9em 2.5em;
    margin-left: 0.2em;
    margin-top: -26.5em;
  }
}
</style>
