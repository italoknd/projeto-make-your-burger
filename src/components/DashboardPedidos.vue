<template>
  <div id="burger-table">
    <div id="burger-table-heading">
      <div class="order-id">#:</div>
      <div>Cliente:</div>
      <div>Pão:</div>
      <div>Carne:</div>
      <div>Opcionais:</div>
      <div>Ações:</div>
    </div>
    <div id="burger-table-rows">
        <div class="burger-table-row">
          <div class="order-number">
            1
          </div>
          <div>
            Joao
          </div>
          <div>
            Integral
          </div>
          <div>
            maminha
          </div>
          <div>
            <ul>
              <li>Salame</li>
              <li>Tomate</li>
            </ul>
          </div>
          <div>
            <select name="stts" class="status">
              <option value="">Solicitado</option>
            </select>
            <button>Cancelar</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardPedidos',
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
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  border: 2px solid #252525;
  cursor: pointer;
  transition: .5s;
 }

 button:hover{
  background-color: #FCAC19;
  color: whitesmoke;
  border: 2px solid #FCAC19
 }
</style>