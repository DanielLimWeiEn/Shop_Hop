import styledComponents from "styled-components";

const Container = styledComponents.div`
    height: 30px;
    background-color:  #e580ff;
    color: white;
    display:flex;
    align-items: center;
    justify-content: center; 
    font-size: 14px; 
    font-weight: 500;
`;

const Announcement = () => {
  return <Container>This is an Annoucement!</Container>;
};

export default Announcement;
