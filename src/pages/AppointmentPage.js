import styled from "styled-components";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import { useState, useContext } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router';

export default function AppointmentPage(){
  const { user } = useContext(UserContext);
  const [appointment, setAppointment] = useState({})
  const { scheduleId } = useParams();
  
  useEffect(() => {

   const URL = `http://localhost:4000/appointments`

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const body = {
      userId: user.id,
      scheduleId:scheduleId,
      status: "em andamento"
    }
    console.log(body)

    axios.post(URL, config, body)
      .then((response) => {
        setAppointment(response.data)
      })
      .catch((error) => console.log(error))
  }, [user]);

  let appointmentComponent

  if (appointment) {
    appointmentComponent =
    <>
   <Wrapper>
    <Container>
      <p>{appointment.status}</p>
    </Container>
   </Wrapper>
    </> 
  }
 return appointmentComponent
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
const Container = styled.div`
  height:200px;
  background-color: #dc968d;
  border: solid 1px #8a5755;
  border-radius: 5px;

`;
