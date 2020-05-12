const perfis = [
    { id: 1, nome:'comum'},
    { id: 2, nome:'admin'},
    { id: 3, nome:'gerente admin'},
]

const usuarios = [{
    id: 1,
    nome: 'Joao Silva',
    email: 'joao@email.com',
    idade: 30,
    perfil_id: 1,
    status: 'ATIVO'
}, {
    id: 2,
    nome: 'Sara Carvalho',
    email: 'sara@email.com',
    idade: 24,
    perfil_id: 2,
    status: 'INATIVO'
}, {
    id: 3,
    nome: 'Gabrielle Santos',
    email: 'gabi@email.com',
    idade: 22,
    perfil_id: 3,
    status: 'BLOQUEADO'
}]


module.exports = { usuarios, perfis }