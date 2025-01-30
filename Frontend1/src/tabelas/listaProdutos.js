import { Container, Table, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { remover } from '../redux/redutores/produtoSlice';

export default function ListaProdutos(props) {
    //o useSelector é uma ganjo para conseguir acessar o redux store e consumi-la(esse fornecedodr é da  store)
    const listaProdutos = useSelector(state => state.produtos)

    const dispatch = useDispatch();//despacha ações para redutores da store

    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Descrição</th>
                        <th>Validade</th>
                        <th>Preço de Custos</th>
                        <th>Preço de Venda</th>
                        <th>Quantidade Estoque</th>
                        <th>Cod. Barras</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaProdutos.map((prod) =>
                            <tr>
                                <td>{prod.codigo}</td>

                                <td>{prod.descricao}</td>

                                <td>{prod.validade}</td>

                                <td>{prod.preco_custo}</td>

                                <td>{prod.preco_venda}</td>

                                <td>{prod.qtd_estoque}</td>

                                <td>{prod.num_cod_barras}</td>
                                <td>
                                    <Button  onClick={() => {
                                        dispatch(remover(prod.codigo));
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                        </svg>
                                       
                                    </Button>
                                </td>
                            </tr>

                        )
                    }
                </tbody>


            </Table>
            <Button onClick={() => props.onTabela(false)}>Novo Produto</Button>
        </Container>

    );
}