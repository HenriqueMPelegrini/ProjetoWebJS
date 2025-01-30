import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

import { useDispatch } from "react-redux";
import { adicionar } from "../redux/redutores/fornecedorSlice";

 export default function FormCadastroFornecedor(props) {
    const [validado, setValidado] = useState(false);

    const dispatch =useDispatch();//despacha ações para redutores da store

    //PRincipal estado do componente formulario de cadastro de cleinte- quando inicai a pagina, vem com esse valores
      const [fornecedor,setFornecedor] = useState({
        codigo:"",
        nome:"",
        endereco:"",
        bairro:"",
        cidade:"",
        estado:"",
        cep:"",
        ativo:"",
      });

      const manipularMudanca = (evento) =>{
        setFornecedor({...fornecedor,[evento.target.name]:evento.target.value})// esse ... faz um copia da cosntante cliente, podendo adiconar novos valores ou até atualizar
        // [evento.target.name]:evento.target.value}
        // cpf:""  --  é isso que signfica esse parte do evento
      }

      const manipularEnvioDados= (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
          dispatch(adicionar(fornecedor));
          setFornecedor({
            codigo:"",
            nome:"",
            endereco:"",
            bairro:"",
            cidade:"",
            estado:"",
            cep:"",
            ativo:"",
          })
        
          setValidado(false)
        }else{
          setValidado(true);
        }
    
        event.preventDefault();
        event.stopPropagation();
      };

      return (
        <Form method ="POST" action="/cadFornecedor"  className="m-3 p-3" noValidate validated={validado} onSubmit={manipularEnvioDados}>
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
                  value ={fornecedor.codigo}
                  onChange={manipularMudanca}
              />
              <Form.Control.Feedback>Ok!</Form.Control.Feedback>
              <Form.Control.Feedback type='invalid'>Informe seu Codigo</Form.Control.Feedback>
              </Form.Group>
          </Row>
       <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Informe seu nome"
              defaultValue=""
              id='nome'
              name='nome'
              value={fornecedor.nome}
              onChange={manipularMudanca}
            />
            <Form.Control.Feedback>Ok!</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>Informe seu Nome</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomnEndereco">
            <Form.Label>Endereço</Form.Label>
              <Form.Control
                  type="text"
                  placeholder="Informe seu Endereço"
                  required
                  id='endereco'
                  name='endereco'
                  value={fornecedor.endereco}
                  onChange={manipularMudanca}
                  
              />
              <Form.Control.Feedback>Ok!</Form.Control.Feedback>
              <Form.Control.Feedback type='invalid'>Informe seu Endereço</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Bairro</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Informe seu Bairro"
              defaultValue=""
              id='bairro'
              name='bairro'
              value={fornecedor.bairro}
              onChange={manipularMudanca}
            />
            <Form.Control.Feedback>Ok!</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>Informe seu Bairro</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Cidade" required
              id='cidade'
              name='cidade'
              value={fornecedor.cidade}
              onChange={manipularMudanca}
            />
            <Form.Control.Feedback>Ok!</Form.Control.Feedback>
              <Form.Control.Feedback type='invalid'>Informe sua Cidade</Form.Control.Feedback>
            
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Estado</Form.Label>
            <Form.Control type="text" placeholder="Estado" required 
              id='estado'
              name='estado'
              value={fornecedor.estado}
              onChange={manipularMudanca}
            />
            <Form.Control.Feedback>Ok!</Form.Control.Feedback>
              <Form.Control.Feedback type='invalid'>Informe seu Estado</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>CEP</Form.Label>
            <Form.Control type="text" placeholder="CEP" required 
              id='cep'
              name='cep'
              value={fornecedor.cep}
              onChange={manipularMudanca}
            />
            <Form.Control.Feedback>Ok!</Form.Control.Feedback>
              <Form.Control.Feedback type='invalid'>Informe seu CEP</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom06">
                <Form.Label>Usuario Ativo</Form.Label>
                <Form.Select aria-label="Default select example"
                id='ativo'
                name='ativo'
                value={fornecedor.ativo}
                onChange={manipularMudanca}
                >
                    <option value="">Open this select menu</option>
                    <option value="true">Aitvo</option>
                    <option value="false">Desativado</option>
                    
                </Form.Select>
            </Form.Group>
        </Row>
        <Button type="submit">Cadastrar</Button>
        <Button type ="button" style={{margin:"15px"}}  variant="secondary" onClick={()=> {props.onTabela(true)}}>Lista Fornecedores</Button>
      </Form>

      );


 }