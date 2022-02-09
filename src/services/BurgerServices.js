import { http } from "./api-config";

export default{
  create: (user) => {
    return http.post("users", user);//envia dados para o servidor
  },

  update: (user) => {
    return http.put("users", user);//atualiza dados do servidor
  },

  read: () => {
    return http.get("users");//mostra dados armazenados
  },

  delete: (user) => {
    return http.delete(`users/${user.id}`);//deleta dados do servidor
  },
}