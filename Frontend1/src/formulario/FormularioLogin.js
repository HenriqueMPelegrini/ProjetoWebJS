import { useContext, useState } from "react";
import ContextoUsuario from "../contextos/ContextoGlobal";// qual contexto vai usar

import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import  imgAvatar from "../imagens/neymar.jpg"

export default function FormLogin() {
    const [usuario,setUsuario] =useContext(ContextoUsuario)

    const [dadosUsuarios,setDadosUsuarios] = useState({
        usuario:"",
        senha:""

    })

    function manipularMudanca(e) {
        setDadosUsuarios({...dadosUsuarios, [e.target.name]: e.target.value})
        
    }

    function login() {
        if (dadosUsuarios.senha === "123") {
            setUsuario({
                nome:dadosUsuarios.usuario,
                avatar:imgAvatar,
                logado:true
            })    
        }
      
    }
    
    return(
        <Container className=" w-50 justify-content-center align-items">
             <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="text" placeholder="Enter Usuario"  id="usuario" name="usuario" value={dadosUsuarios.usuario} onChange={manipularMudanca}/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" id="senha" name="senha"  value={dadosUsuarios.senha} onChange={manipularMudanca}/>
                </Form.Group>
                <Button onClick={login} variant="primary" type="button">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}