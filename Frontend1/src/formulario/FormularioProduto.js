import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import { useDispatch } from "react-redux";
import { adicionar } from "../redux/redutores/produtoSlice";

// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

 export default function FormCadastroProduto(props) {
    const [validado, setValidado] = useState(false);

    const dispatch =useDispatch();//despacha ações para redutores da store

    //PRincipal estado do componente formulario de cadastro de cleinte- quando inicai a pagina, vem com esse valores
      const [produto,setProduto] = useState({
        codigo:"",
        descricao:"",
        validade:"",
        preco_custo:"",
        preco_venda:"",
        qtd_estoque:"",
        num_cod_barras:"",
       
      });

      const manipularMudanca = (evento) =>{
        setProduto({...produto,[evento.target.name]:evento.target.value})// esse ... faz um copia da cosntante cliente, podendo adiconar novos valores ou até atualizar
        // [evento.target.name]:evento.target.value}
        // cpf:""  --  é isso que signfica esse parte do evento
      }

      const manipularEnvioDados= (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
          // action  clientes/ adicionar 
          dispatch(adicionar(produto));// os dispatch seria enviar e usa do reducer adiconar para adicionar o cliente
          setProduto({
            codigo:"",
            descricao:"",
            validade:"",
            preco_custo:"",
            preco_venda:"",
            qtd_estoque:"",
            num_cod_barras:"",
          })
          setValidado(false)
        }else{
          setValidado(true);
        }
        event.preventDefault();
        event.stopPropagation();
      };
      return(
        <Form method ="POST" action="/cadProduto"  className="m-3 p-3" noValidate validated={validado} onSubmit={manipularEnvioDados}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom00">
              <Form.Label>Codigo</Form.Label>
              <Form.Control
                  required
                  type="text"
                  placeholder="Informe seu Codigo"
                  defaultValue=""
                  id='codigo'
                  name='codigo'
                  value ={produto.codigo}
                  onChange={manipularMudanca}
              />
              <Form.Control.Feedback>Ok!</Form.Control.Feedback>
              <Form.Control.Feedback type='invalid'>Informe seu Codigo</Form.Control.Feedback>
              </Form.Group>
          </Row>
       <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Descrição</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Informe a Descrição"
              defaultValue=""
              id='descricao'
              name='descricao'
              value ={produto.descricao}
              onChange={manipularMudanca}
            />
            <Form.Control.Feedback>Ok!</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>Informe seu Descrição</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Validade</Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="Informe a Validade"
              defaultValue=""
              id='validade'
              name='validade'
              value={produto.validade}
              onChange={manipularMudanca}
            />
            <Form.Control.Feedback>Ok!</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>Informe a Validade</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomnEndereco">
            <Form.Label>Preço Custo</Form.Label>
              <Form.Control
                  type="text"
                  placeholder="Informe seu Preço de Custo"
                  required
                  id='preco_custo'
                  name='preco_custo'
                  value={produto.preco_custo}
                  onChange={manipularMudanca}
                  
              />
              <Form.Control.Feedback>Ok!</Form.Control.Feedback>
              <Form.Control.Feedback type='invalid'>Informe seu Preço de Custo</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Preço de Venda</Form.Label>
            <Form.Control type="text" placeholder="Preço de Venda" required
              id='preco_venda'
              name='preco_venda'
              value={produto.preco_venda}
              onChange={manipularMudanca}
            />
            <Form.Control.Feedback>Ok!</Form.Control.Feedback>
              <Form.Control.Feedback type='invalid'>Informe sua Cidade</Form.Control.Feedback>
            
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Quantidade</Form.Label>
            <Form.Control type="number" placeholder="Quantidade" required 
              id='qtd_estoque'
              name='qtd_estoque'
              value={produto.qtd_estoque}
              onChange={manipularMudanca}
            />
            <Form.Control.Feedback>Ok!</Form.Control.Feedback>
              <Form.Control.Feedback type='invalid'>Informe sua Quantidade</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Codigo de Barras</Form.Label>
            <Form.Control type="text" placeholder="Codigo de Barras" required 
              id='num_cod_barras'
              name='num_cod_barras'
              value={produto.num_cod_barras}
              onChange={manipularMudanca}
            />
            <Form.Control.Feedback>Ok!</Form.Control.Feedback>
              <Form.Control.Feedback type='invalid'>Informe seu Codigo de Barras</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit">Cadastrar</Button>
        <Button type ="button" style={{margin:"15px"}}  variant="secondary" onClick={()=> {props.onTabela(true)}}>Lista Produtos</Button>
      </Form>

      );
      
}