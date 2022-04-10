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
    background-image: url('/img/burger.jpg');
    background-position: -35em center!important;
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
    font-size: 1.25em;
    padding: 15px;
    border-bottom: 3px solid #fcac19;
    border-right: 3px solid #fcac19;
  }
}

@media (max-width: 768px) {
  #main-banner {
    background-image: url('/img/burger.jpg');
    background-position: center center;
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
    font-size: 1.25em;
    padding: .9em 2.5em;
    border-bottom: 3px solid #fcac19;
    border-right: 3px solid #fcac19;
    margin-top: 30em;
    margin-left: 0.2em;
  }
}
</style>
