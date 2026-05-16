function Pessoa(_cpf, _nome, _email, _celular){
    this.CPF = _cpf
    this.Nome = _nome
    this.Email = _email
    this.Celular = _celular
}
cliente1 = new Pessoa("123.456.789-00","Pedro","pedro.borges@ftc.edu.br","73987654321")
cliente2 = new Pessoa("000.111.789-00","fulano","fulano@ftc.edu.br","")
console.log(cliente1.CPF,cliente1.Nome,cliente1.Email,cliente1.Celular)
console.log(cliente2.CPF,cliente2.Nome,cliente2.Email,cliente2.Celular)