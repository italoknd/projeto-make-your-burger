<template>
  <div>
    <h1>Monte seu burger:</h1>
    <PedidoConcluido :msg="msgPedido" v-show="msgPedido"/>

    <div>
      <form id="burger-form" @submit="createBurger">
        <div class="form">
          <div class="input-container">
            <label for="name">Nome do cliente:</label>
            <input type="text" id="name" name="name" v-model="nome" placeholder="Digite seu nome">
          </div>
          <div class="input-container">
            <label for="bread">Escolha o pão:</label>
            <select name="bread" id="bread" v-model="pao">
              <option value="">Selecione seu pão:</option>
              <option v-for="pao in paes" :key='pao.id' :value="pao.tipo">
                {{pao.tipo}}
              </option>
            </select>
          </div>
          <div class="input-container">
            <label for="meat">Escolha a carne do seu burger:</label>
            <select name="meat" id="meat" v-model="carne">
              <option value="">Selecione o tipo de carne:</option>
              <option v-for="carne in carnes" :key='carne.id' :value="carne.tipo">
                {{carne.tipo}}
              </option>
            </select>
          </div>
          <div id="optionals" class="input-container">
            <label id="optionals-title" for="optionals">Selecione as opcionais:</label>
            <div id="checkbox-container" v-for="opcionais in opcionais_data" :key="opcionais.id">
              <input type="checkbox" name="opcionais" v-model="itens_opcionais" :value="opcionais.tipo">
              <span>{{ opcionais.tipo }}</span>
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
import PedidoConcluido from './PedidoConcluido.vue'

export default {
  name: 'BurgerForm',
  components:{
    PedidoConcluido
  },
  data() {
    return {
    msgPedido: "",

    //dados que vem do servidor para a aplicação
     paes: null,
     carnes: null,
     opcionais_data: null,
     
     //dados de vão da aplicação para o servidor
     nome: null,
     pao: null,
     carne: null,
     itens_opcionais: [],
     msg: null
    }
  },
  methods:{
    async getIngredientes(){

      const req = await fetch('http://localhost:3000/ingredientes');
      const data = await req.json();

      this.paes = data.paes;
      this.carnes = data.carnes;
      this.opcionais_data = data.itens_opcionais;
    },

    async createBurger(e){
      
      e.preventDefault();
      
      const data = {
        nome: this.nome,
        carne: this.carne,
        pao: this.pao,
        opcionais: Array.from(this.itens_opcionais),
        status: "Solicitado"
      }

      const dataJson = JSON.stringify(data) //convertendo o objeto data em texto (JSON p/ txt)

      const req = await fetch('http://localhost:3000/burgers',{
        method: 'POST',
        headers:{"Content-Type": "application/json"}, //comunicação com o JSON
        body: dataJson //enviando dados do dataJson como txt
      })

      const res = await req.json()

      //colocar msg no sistema
      this.msgPedido = `Pedido Nº ${res.id} realizado com sucesso!`

      //limpar msg pós pedido feito
      setTimeout(() => {
        this.msgPedido = ""
        document.location.reload()
      }, 7000);

    }
  },
  mounted(){
    this.getIngredientes()
  }
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