import axios from "axios"

class UsuarioService{

    async cadastrar(data){
       return axios({
           url: "http://192.168.1.151:3000/usuario/cadastrar", //url com o IP da máquina que está sendo usada
           method: "POST",
           timeout: 5000,
           data: data,
           headers: {
               Accept: 'application/json'
           }
       }).then((response) => {
           return Promise.resolve(response) //se der certo ele vai retornar a resposta
       }).catch((error) => {
           return Promise.reject(error)//se não ele retorna o erro
       })
    }
}

const usuarioService = new UsuarioService()
export default usuarioService