const { usuarios, perfis } = require('../data/db')


module.exports = { 
    ola() {
        return 'Tudo bem'
    },
    horaAtual() {
        return `${new Date}`
    },
    UsuarioLogado() {
        return {
            nome: 'Denis',
            salario_real: 10000.00,
            vip: true,
            email: 'denis@email.com',
            id: 1,
            idade: 22
        }
    },
    ProdutoEmDestaque() {
        return {
            nome: 'Notebbok Gamer',
            preco: 4100.00,
            desconto: 0.5,
        }
    },
    numerosMegaSena() {
        // return [1,2,3,4,5]
        const crescente = (a,b) => a - b
        return Array(6).fill(0)
        .map(n => parseInt(Math.random() * 60 + 1))
        .sort(crescente)
    },
    usuarios() {
        return usuarios
    },
    usuario(_, args) {
        const selecionado = usuarios.filter(u => u.id == args.id)
        return selecionado ? selecionado[0] : null
    },
    perfis() {
        return perfis
    },
    perfil(_, { id }) {
        const selecionado = usuarios.filter(u => u.id == id)
        return selecionado ? selecionado[0] : null
    }
 }