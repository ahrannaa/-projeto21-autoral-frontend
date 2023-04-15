import styled from "styled-components";

export default function CompaniesPage() {
  const { user } = useContext(UserContext);
  const [company, setCompany] = useState([])

  useEffect(() => {
    console.log("use effect")
    const URL = "http://localhost:5000/transaction"

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios.get(URL, config)
      .then((response) => {
        console.log(response)
        setExtrato(response.data.transactions)
      })
      .catch((error) => console.log(error))

  }, [user]);

  return (
    <Wrapper>
      <Title>Beauty Mate</Title>
      <ButtonsContainer>
        <Button><ButtonText>Charme Feminino</ButtonText></Button>
        <Button><ButtonText>Barba e Estilo</ButtonText></Button>
      </ButtonsContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #8a5755;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 70px;
  color: white;
  margin-top: 20px;
  font-family: 'Brush Script MT', cursive;

  @media (max-width: 768px) {
    font-size: 36px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 20px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;

const Button = styled.button`
  background-color: #8a5755;
  color: #fff;
  font-size: 16px;
  padding: 10px 30px;
  border: solid 1px white;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #dc968d;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const ButtonText = styled.p`
  margin: 0;
`;
