import styled from "styled-components";
import ImageWithName from "./ImageWithNamePage";
import TopBarPage from "./TopBarPage";

export default function CharmeFemininoPage(){
  return (
    <>
      <TopBarPage></TopBarPage>
      <ImgWrapper>
       <StyleDiv>
         <ImageWithName src= "img/Beleza.jpeg"name="Beleza"></ImageWithName>
         <ImageWithName src="img/Beleza.jpeg"name= "Estetica"></ImageWithName>
         <ImageWithName src="img/Beleza.jpeg"name= "Unhas"></ImageWithName>
         <ImageWithName src="img/Beleza.jpeg"name= "MakeUp"></ImageWithName>
         <ImageWithName src="img/Beleza.jpeg"name= "Cortes"></ImageWithName>
         <ImageWithName src="img/Beleza.jpeg"name= "Sobrancelhas"></ImageWithName>
       </StyleDiv> 
      </ImgWrapper>
    </> 
  );

}
const ImgWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  margin-top: 20px;
`;

const StyleDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`