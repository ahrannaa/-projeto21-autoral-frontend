import styled from "styled-components";

export default function HomePage(){
  
  return (
    <Wrapper>
    <NameApp>
      <h1>Beauty Mate</h1>
      <Button><p>Sign Up</p></Button>
      <Button><p>Sign In</p></Button>
    </NameApp>
    </Wrapper>
  )
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #F2F2F2;
   
  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }
`;
const NameApp = styled.div `
  h1 {
     font-size: 70px;
     color: #8a5755;
     margin-top: 20px;
     font-family: brush script Mt;
  } 
     @media (max-width: 768px) {
      font-size: 36px;
      text-align: center;
      margin-top: 0;
      margin-bottom: 20px;
  }
`
const Button = styled.button`
  background-color: white;
  color: white;
  font-size: 16px;
  padding: 5px 80px;
  border: solid 1px #8a5755;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
  background-color: #8a5755 ;
  }
  
  p {
   color: #dc968d  
  }
   
  @media (max-width: 768px) {
    padding: 5px 20px;
  } 
`;