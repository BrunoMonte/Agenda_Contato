
# Instalando dependencias e executando a api
$ Na sua máquina abrir cmd, executar seguinte comando: git clone https://github.com/BrunoMonte/Agenda_Contato.git

$ Após clonar o repósitorio , "code ." irá abrir no editor, onde terá melhor visualização do código.

$ Abra terminal execute o seguinte: Npm install (parainstalar as dependências do projeto)

$ Após npm start, onde api irá rodar da porta 3000

# Fazendo uso do Post, Get, Put, Del

## utilize o postman

$ http://localhost:3000/notes

$ No post irá solicitar o seguintes campos: 
{
    "numero": "99125612",
    "nome": "Exemplo",
    "email": "exemplo@exemplo"
} 

$ No Get irá executar List, com listagem dos contatos salvos

$ No put irá solicitar o seguinte campo:
[
    {
    "nome":"Exemplo"
}
] //Para fazer alterações no contato de nome informado


$ No Del irá solictar o campo de nome para fazer exclusão do contato
