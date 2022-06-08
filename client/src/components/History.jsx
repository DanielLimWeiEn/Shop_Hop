import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  width: 85vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;    
  height: 50%;
  width: 100%;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;
`;

const Summary = styled.div`
  height: 100%;
  width: 50%;
  border: 1px solid;
`;
// const Image = styled.img`
//   width: 400px;
//   height: 350px;
// `;

const Spending = styled.div`
  height: 100%;
  width: 50%;
  border: 1px solid;
`;

const ItemList = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid;
`;

const ItemHeading = styled.div`
  font-size: 25px;
  color: white;
  padding-left: 20px;
  padding-top: 5px;
  background-color: purple;
  height: 40px;
`;

const History = () => {
  return (
    <Container>
      <Top>
        <Summary>
          Graph
          {/* <Image src="https://www.conceptdraw.com/solution-park/resource/images/solutions/bar-graphs/Graphs-and-Charts-Bar-Charts-Percentage-with-Various-Levels-of-Family-Income.png" /> */}
        </Summary>
        <Spending>Your spending total is a morbillion dollars</Spending>
      </Top>
      <Bottom>
        <ItemList>
          <ItemHeading>Items Purchased</ItemHeading>
        </ItemList>
      </Bottom>
    </Container>
  );
};

export default History;
