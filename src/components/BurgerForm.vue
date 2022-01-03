<template>
  <div>
    <h1>Monte seu burger:</h1>
    <p>Pedido realizado com sucesso [msg futura]</p>

    <div>
      <form id="burger-form" @click="vazio_ainda">
        <div class="form">
          <div class="input-container">
            <label for="name">Nome do cliente:</label>
            <input type="text" id="name" name="name" v-model="name" placeholder="Digite seu nome">
          </div>
          <div class="input-container">
            <label for="bread">Escolha o pão:</label>
            <select name="bread" id="bread" v-model="bread">
              <option value="">Selecione seu pão:</option>
              <option value="integral">Integral</option>
            </select>
          </div>
          <div class="input-container">
            <label for="meat">Escolha a carne do seu burger:</label>
            <select name="meat" id="meat" v-model="meat">
              <option value="">Selecione o tipo de carne:</option>
              <option value="maminha">Maminha</option>
            </select>
          </div>
          <div id="optionals" class="input-container">
            <label id="optionals-title" for="optionals">Selecione as opcionais:</label>
            <div id="checkbox-container">
              <input type="checkbox" name="salame" id="optionals" v-model="optionals">
              <span>Salame</span>
            </div>
                      <div id="checkbox-container">
              <input type="checkbox" name="salame" id="optionals" v-model="optionals">
              <span>Salame</span>
            </div>
                      <div id="checkbox-container">
              <input type="checkbox" name="salame" id="optionals" v-model="optionals">
              <span>Salame</span>
            </div>
                      <div id="checkbox-container">
              <input type="checkbox" name="salame" id="optionals" v-model="optionals">
              <span>Salame</span>
            </div>
                      <div id="checkbox-container">
              <input type="checkbox" name="salame" id="optionals" v-model="optionals">
              <span>Salame</span>
            </div>
                      <div id="checkbox-container">
              <input type="checkbox" name="salame" id="optionals" v-model="optionals">
              <span>Salame</span>
            </div>
          </div>
        </div>

        <div class="input-container">
          <input type="submit" value="Criar meu Burger!" class="submit-button">
        </div>
      </form>
    </div>

  </div>
</template>

<script>
export default {
  name: 'BurgerForm',
  data() {
    return {
     
    }
  },
}
</script>

<style scoped>
  .form{
    margin: 0px 50px;
  }

  #burger-form{
    max-width: 400px;
    margin: 0 auto;
  }

  .input-container{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  label{
    font-weight: bold;
    margin-bottom: 15px;
    color: #252525;
    border-left: 4px solid #FCAC19;
    padding: 5px 10px;
  }

  input, select{
    padding: 5px 10px;
    width: 300px;
  }

  #optionals{
    flex-direction: row;
    flex-wrap: wrap;
  }

  #optionals-title{
   width: 100%;
  }

  #checkbox-container{
    display: flex;
    align-items: flex-start;
    width:50%;
    margin-bottom: 20px;
  }

  #checkbox-container span,
  #checkbox-container input{
    width: auto;
  }

  #checkbox-container span{
    margin-left: 6px;
    font-weight: bold;
  }

  .submit-button{
    background: #252525;
    color: #FCAC19;
    font-weight: bold;
    font-size: 1rem;
    padding: 10px;
    border: 2px solid #252525;
    cursor: pointer;
    transition: .5s;
    margin: auto;
  }

  .submit-button:hover{
    background-color: #FCAC19;
    color: whitesmoke;
    border: 2px solid #FCAC19;
    border-radius: 3px;
  }
</style>