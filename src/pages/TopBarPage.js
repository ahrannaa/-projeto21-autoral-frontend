import styled from "styled-components";

export default function TopBarPage(props){
  const {companyDetails} = props
 
  return (
   <TopBar>
    <LinkWrapper>
      <Link href="#">{companyDetails.name}</Link>
    </LinkWrapper>
    </TopBar>
  )
};

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