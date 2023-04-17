import { useParams } from "react-router";
import styled from "styled-components";
import ImageWithName from "./ImageWithNamePage";
import TopBarPage from "./TopBarPage";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { useEffect } from "react";


export default function CharmeFemininoPage(props){
  const { id } = useParams()
  const { user } = useContext(UserContext);
  const [companyDetails, setCompanyDetails] = useState({})

  useEffect(() => {
    const URL = `http://localhost:4000/companies/${id}/categories`

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios.get(URL, config)
      .then((response) => {
        setCompanyDetails(response.data)
      })
      .catch((error) => console.log(error))
  }, [user.token, id]);

  let detailsComponent

  if (companyDetails.category) {
    detailsComponent = 
    <>
      <TopBarPage companyDetails={companyDetails}></TopBarPage>
      <ImgWrapper>
      <StyleDiv>
        {companyDetails.category.map((category)=>
        <Link to={`/categories/${category.id}/service`} category={category}><ImageWithName key={category.id} src={category.image}name={category.name}></ImageWithName></Link>
        )}
      </StyleDiv> 
      </ImgWrapper>
    </> 
  }

  return detailsComponent
}
const ImgWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  margin-top: 40px;
`;

const StyleDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`