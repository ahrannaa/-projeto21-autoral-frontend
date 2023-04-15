import styled from "styled-components";
import TopBarPage from "./TopBarPage";

export default function ServicePage(){
  return (
    <>
    <TopBarPage></TopBarPage>
     <Container>
      <ServiceWrapper>
        <Service>
          <p>Coloração cabelos longos</p>
          <p>Valor: R$ 150,00</p>
          <button>agendar</button>
        </Service>
      </ServiceWrapper>
    </Container>
    </> 
  )
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  margin-top: 20px;
`;
const ServiceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Service = styled.div`
  width: 250px;
  height: 130px;
  background-color: #8a5755;
  border-radius:5px;
  margin: 20px;

  p {
    font-size: 20px;
    color: #ffffff;
    justify-content:center;
    text-align: center;
  }

  button {
   width: 100px;
   height: 20px;
   border: solid 1px #8a5755;
   border-radius: 5px;
   color:#8a5755;
   background-color:white;
   margin: 0 80px;
   cursor: pointer;
   margin-right: 10px;
  }
`