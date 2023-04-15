import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")

  let navigate = useNavigate();

  const registerUser = async (e) => {
     e.preventDefault()
     const URL = "http://localhost:4000/users/sign-up"
 
     const body = {
       name: name,
       email: email,
       password: password,
       phone: phone
     }
     
      try {
       const response = await axios.post(URL, body)
       navigate("../signIn", { replace: true });
      } catch (err) {
       alert(`error: ${err.response?.data}`)
     }
   }
  
  return (
    <Wrapper>
      <h2>crie sua conta para continuar!</h2>
      <Form onSubmit={registerUser}>
      <div>
        <Label>Nome:</Label>
        <Input
        value={name}
        onChange={e => setName(e.target.value)}
        type="text"
        required
        name="name"
        placeholder="Beauty Mate"></Input>
      </div>
      <div>
        <Label>Email:</Label>
        <Input 
        value={email}
        onChange={e => setEmail(e.target.value)}
        type="text"
        required
        name="email"
        placeholder="BeautyMate@email.com"></Input>
      </div>
      <div>
        <Label>Senha:</Label>
        <Input 
        value={password}
        onChange={e => setPassword(e.target.value)}
        type="text"
        required
        name="password"
        placeholder="******"></Input>
      </div>
      <div>
        <Label>Phone:</Label>
        <Input 
        value={phone}
        onChange={e => setPhone(e.target.value)}
        type="text"
        required
        name="phone"
        placeholder="(**)999999999"></Input>
      </div>
      <Button type="submit">Criar conta</Button>
      <StyleLink>
        <Link to="/signIn">Já tem uma conta? Entre agora!</Link>
      </StyleLink>
      </Form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #F2F2F2;
  
  h2 {
    margin-left: 50px;
    color: #8a5755;
    font-family: monospace;
  }
   
  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }
`;
const Input = styled.input`
  width: 303px;
  height: 45px;
  margin-bottom: 10px;
  background: #ffffff;
  border: solid 1px #8a5755;
  border-radius: 5px;
  ::placeholder {
    font-size: 15px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    padding: 10px;
  }
`;
const Label = styled.label`
  margin-right: 10px;
  color: #8a5755;
`;
const Button = styled.button`
  background-color: #8a5755;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 80px;
  font-size: 16px;
  margin-left: 50px;
  cursor: pointer;
  margin-top: 20px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`
const StyleLink = styled.div`
  padding: 20px;
  a {
    margin-left: 50px;
    font-family: monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #8a5755;
  }
`;
