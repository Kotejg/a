import produtos from "./produtos"

function ListaProduto(props) {

    function exibirLista(){
        return(
            produtos.map(p =>{
                return(
                    <h3>
                        {p.id} {p.nome} tem preço R$ {p.preco}
                    </h3>
                );
            })
        );
    }


    return (
        <>
        <h2>lista de produtos</h2>
        {exibirLista()}
        </>
    )
}

export default ListaProduto