function aplicarDesconto(livros) {
    const desconto = 0.3;
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)} //{...objeto, atributoAlterado : novoValor } Usado para alterar um valor e salvar todo o objeto
    })

    return livrosComDesconto;
}