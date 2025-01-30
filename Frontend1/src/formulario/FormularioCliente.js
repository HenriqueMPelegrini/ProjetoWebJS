import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from "react-redux";
import { adicionarClientes } from "../redux/redutores/clientesSlice";
import { STATUS } from '../redux/redutores/clientesSlice'

 export default function FormCadastroCliente(props) {
  const [validado, setValidado] = useState(false);

  const dispatch =useDispatch();//despacha ações para redutores da store

//PRincipal estado do componente formulario de cadastro de cleinte- quando inicai a pagina, vem com esse valores
  const [cliente,setCliente] = useState({
    cpf:"",
    nome:"",
    sobrenome:"",
    endereco:"",
    cidade:"",
    estado:"",
    cep:"",
  });

  const {status}= useSelector(state=>state.clientes)

  const manipularMudanca = (evento) =>{
    setCliente({...cliente,[evento.target.name]:evento.target.value})// esse ... faz um copia da cosntante cliente, podendo adiconar novos valores ou até atualizar, ou seja, a cada letra ele atualiza
    // [evento.target.name]:evento.target.value}
    // cpf:""  --  é isso que signfica esse parte do evento
  }

  const manipularEnvioDados = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      // action  clientes/ adicionar 
      // dispatch(adicionar(cliente));// os dispatch seria enviar e usa do reducer adiconar para adicionar o cliente
      dispatch(adicionarClientes(cliente));
      setCliente({
        cpf:"",
        nome:"",
        sobrenome:"",
        endereco:"",
        cidade:"",
        estado:"",
        cep:"",
      })
      setValidado(false)
    }else{
      setValidado(true);
    }
    event.preventDefault();
    event.stopPropagation();
   
  };

  if (status === STATUS.OCIOSO) {
    return(
      <Container>
              <Button variant="primary" disabled>
                  <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      />
                    {} Adicionando Clientes
              </Button>
      </Container>
  )
  } else  if (status === STATUS.CARREGADO) {
    return (
      <Form method ="POST" action="/cliente"  className="m-3 p-3" noValidate validated={validado} onSubmit={manipularEnvioDados}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
              <Form.Label>CPF</Form.Label>
              <Form.Control
                  required
                  type="text"
                  placeholder="Informe seu CPF"
                  defaultValue=""
                  id='cpf'
                  name='cpf'
                  value ={cliente.cpf}
                  onChange={manipularMudanca}
              />
              <Form.Control.Feedback>Ok!</Form.Control.Feedback>
              <Form.Control.Feedback type='invalid'>Informe seu CPF</Form.Control.Feedback>
              </Form.Group>
          </Row>
      <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Informe seu nome"
              defaultValue=""
              id='nome'
              name='nome'
              value={cliente.nome}
              onChange={manipularMudanca}
            />
            <Form.Control.Feedback>Ok!</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>Informe seu Nome</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" >
            <Form.Label>Sobrenome</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Informe seu Sobrenome"
              defaultValue=""
              id='sobrenome'
              name='sobrenome'
              value={cliente.sobrenome}
              onChange={manipularMudanca}
            />
            <Form.Control.Feedback>Ok!</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>Informe seu Sobrenome</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" >
            <Form.Label>Endereço</Form.Label>
              <Form.Control
                  type="text"
                  placeholder="Informe seu Endereço"
                  required
                  id='endereco'
                  name='endereco'
                  value={cliente.endereco}
                  onChange={manipularMudanca}
                  
              />
              <Form.Control.Feedback>Ok!</Form.Control.Feedback>
              <Form.Control.Feedback type='invalid'>Informe seu Endereço</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" >
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Cidade" required
              id='cidade'
              name='cidade'
              value={cliente.cidade}
              onChange={manipularMudanca}
            />
            <Form.Control.Feedback>Ok!</Form.Control.Feedback>
              <Form.Control.Feedback type='invalid'>Informe sua Cidade</Form.Control.Feedback>
            
          </Form.Group>
          <Form.Group as={Col} md="3" >
            <Form.Label>Estado</Form.Label>
            <Form.Control type="text" placeholder="Estado" required 
              id='estado'
              name='estado'
              value={cliente.estado}
              onChange={manipularMudanca}
            />
            <Form.Control.Feedback>Ok!</Form.Control.Feedback>
              <Form.Control.Feedback type='invalid'>Informe seu Estado</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" >
            <Form.Label>CEP</Form.Label>
            <Form.Control type="text" placeholder="CEP" required 
              id='cep'
              name='cep'
              value={cliente.cep}
              onChange={manipularMudanca}
            />
            <Form.Control.Feedback>Ok!</Form.Control.Feedback>
              <Form.Control.Feedback type='invalid'>Informe seu CEP</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit">Cadastrar</Button>
        <Button type ="button" style={{margin:"15px"}}  variant="secondary" onClick={()=> {props.onTabela(true)}}>Lista Clientes</Button>
      </Form>
    );
  }
}
