import styled from "styled-components";
import ImageWithName from "./ImageWithNamePage";

export default function CharmeFemininoPage(){
  function minhaFuncao() {
    alert(foi)
  }

  return (
    <>
    <TopBar>
      <LinkWrapper>
        <Link href="#">Charme Feminino</Link>
      </LinkWrapper>
      </TopBar>
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
const TopBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8a5755;
  height: 80px;
  padding: 0 20px;
`;
const LinkWrapper = styled.div`
  display: flex;
`;
const Link = styled.a`
  color: white;
  text-decoration: none;
  margin-left: 20px;
  font-size: 60px;
`;
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