<template>
  <div id="burger-table">
    <PedidoConcluido :msg="msgPedido" v-show="msgPedido"/>
    <div id="burger-table-heading">
      <div class="order-id">#:</div>
      <div>Cliente:</div>
      <div>Pão:</div>
      <div>Carne:</div>
      <div>Opcionais:</div>
      <div>Ações:</div>
    </div>
    <div id="burger-table-rows">
        <div class="burger-table-row" v-for="burger in burgers" :key="burger.id">
          <div class="order-number">
            <strong>{{burger.id}}</strong>
          </div>
          <div>
            {{burger.nome}}
          </div>
          <div>
            {{burger.pao}}
          </div>
          <div>
            {{burger.carne}}
          </div>
          <div>
            <ul>
              <li v-for="(opcional,index) in burger.opcionais" :key="index">
                {{opcional}}
              </li>
            </ul>
          </div>
          <div>
            <select name="stts" class="status" @change="atualizarStatus($event, burger.id)">
              <option value="">Selecione</option>
              <option :value="statusPedido.tipo" v-for="statusPedido in stts" :key="statusPedido.id" :selected="burger.status == statusPedido.tipo">
                {{statusPedido.tipo}}
              </option>
            </select>
            <button @click="cancelarPedido(burger.id)">Cancelar</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import PedidoConcluido from '../components/PedidoConcluido.vue'

export default {
  name: 'DashboardPedidos',
  data(){
    return{
      burgers: null,
      burger_id: null,
      stts: [],
      msgPedido: null
    }
  },
  methods:{
    async getPedidos(){
      const req = await fetch('http://localhost:3000/burgers')

      const data = await req.json()

      this.burgers = data

      //resgatar os stts
      this.getStatus()

    },


    async getStatus(){
      const req = await fetch('http://localhost:3000/status')

      const status = await req.json()

      this.stts = status
    },


    async cancelarPedido(id){
      const req = await fetch(`http://localhost:3000/burgers/${id}`,{
        method: 'DELETE'
      })

      const res = await req.json()

      //colocar msg no sistema
      this.msgPedido = `Pedido removido com sucesso!`

      //limpar msg pós pedido feito
      setTimeout(() => {
        this.msgPedido = ""
      }, 7000);

      this.getPedidos()
    },


    async atualizarStatus(event, id){
      const option = event.target.value

      const dataJson = JSON.stringify({status: option})

      const req = await fetch(`http://localhost:3000/burgers/${id}`,{
        method: "PATCH",  //update
        headers: {'Content-Type': 'application/json'},
        body: dataJson
      })

      const res = await req.json()

      //colocar msg no sistema
      res.status = res.status.toLocaleUpperCase()
      this.msgPedido = `Pedido Nº ${res.id} foi atualizado para "${res.status}" com sucesso!`

      //limpar msg pós pedido feito
      setTimeout(() => {
        this.msgPedido = ""
      }, 7000);

      console.log(res);
    }
  },
  mounted(){
    this.getPedidos()
  },
  components:{
    PedidoConcluido
  }
}
</script>

<style scoped>
 #burger-table{
   max-width: 1200px;
   margin: 0 auto;
 }

 #burger-table-heading,
 #burger-table-rows,
 .burger-table-row{
   display: flex;
   flex-wrap: wrap;
 }

 #burger-table-heading{
   font-weight: bold;
   padding: 12px;
   border-bottom: 3px solid #333;
 }

 #burger-table-heading div,
 .burger-table-row div{
   width: 19%;
 }

 .burger-table-row{
   width: 100%;
   padding: 12px;
   border-bottom: 1px solid #ccc;
 }

 #burger-table-heading .order-id,
 .burger-table-row .order-number{
   width: 5%;
 }

 select{
  padding: 12px 6px;
  margin-right: 12px;
 }

 button{
  background: #252525;
  color: #FCAC19;
  padding: 10px 22px;
  font-size: 1rem;
  font-weight: bold;
  border: 2px solid #252525;
  cursor: pointer;
  margin-top: 10px;
  transition: .5s;
 }

 button:hover{
  background-color: #FCAC19;
  color: whitesmoke;
  border: 2px solid #FCAC19
 }
</style>