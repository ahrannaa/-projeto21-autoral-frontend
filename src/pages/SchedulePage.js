import styled from "styled-components";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Modal from "react-modal";
import TopBarPage from "./TopBarPage";

export default function SchedulePage(props){
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('serviceId')
  const { user } = useContext(UserContext);
  const [scheduleDetails, setScheduleDetails] = useState([])
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {

   const URL = `http://localhost:4000/schedule?serviceId=${id}`

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios.get(URL, config)
      .then((response) => {
        setScheduleDetails(response.data)
      })
      .catch((error) => console.log(error))
  }, [user.token, id]);

  const handleSchedule = () => {
    setShowModal(true);
  };

  let scheduleComponent

  if (scheduleDetails.length > 0) {
    scheduleComponent =
    <>
    <TopBar></TopBar>
     <Container>
      <ServiceWrapper>
        {scheduleDetails.map((schedule) => (
         <Service key={schedule.id}>
         <p>Data:{schedule.date}</p>
         <p>Hora inicial: {schedule.startTime}</p>
         <p>Hora final: {schedule.endTime}</p>
        <button onClick={handleSchedule}>agendar</button>
         </Service>
        ))}  
      </ServiceWrapper>
      {showModal && (
        <Modal
        isOpen={showModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0 ,0, 0.8)'
          }, content: {
             width: "500px",
             height: "262px",
             background: " #8a5755",
             borderRadius: "50px",
             top: "50%",
             left: "50%",
             right: "auto",
             bottom: "auto",
             marginRight: "-50%",
             transform: "translate(-50%, -50%)",
          }
        }}
        >
          <ModalTitle>Agendamento concluído com sucesso!</ModalTitle>
          <ModalButton onClick={() => setShowModal(false)}><p>Fechar</p></ModalButton>
        </Modal>
      )}
    </Container>
    </> 
  }
 return scheduleComponent
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
  height: 200px;
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
const ModalTitle = styled.h2`
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  text-align:center;
`;

const ModalButton = styled.button`
  background-color: white;
  color: white;
  font-size: 16px;
  padding: 5px 80px;
  border: solid 1px #8a5755;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 130px;
 p {
   color: #dc968d  
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