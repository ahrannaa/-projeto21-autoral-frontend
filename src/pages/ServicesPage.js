import styled from "styled-components";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router';

export default function ServicePage(props) {
  const { user } = useContext(UserContext);
  const [categoryDetails, setCategoryDetails] = useState({})
  const { categoryId } = useParams();

  useEffect(() => {

    const URL = `http://localhost:4000/categories/${categoryId}/service`

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios.get(URL, config)
      .then((response) => {
        setCategoryDetails(response.data)
      })
      .catch((error) => console.log(error))
  }, [user.token, categoryId]);

  let serviceComponent

  if (categoryDetails.service) {
    serviceComponent =
      <>
        <TopBar></TopBar>
        <Container>
          <ServiceWrapper>
            {categoryDetails.service.map((service) => (
              <Service>
                <p>{service.name}</p>
                <p>Valor: R${service.price},00</p>
                <Link to={`/schedule?serviceId=${service.id}`} service={service}><button key={service.id}>agendar</button></Link>
              </Service>
            ))}
          </ServiceWrapper>
        </Container>
      </>
  }
  return serviceComponent

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
`;
const TopBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8a5755;
  height: 80px;
  padding: 0 20px;
`;