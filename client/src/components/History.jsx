import styled from "styled-components";

import ProfilePurchaseListing from "./ProfilePurchaseListing";
import ProfileChart from "./ProfileChart";

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
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;
  border-bottom: 0.8px solid grey;
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
`;

const Spending = styled.div`
  height: 100%;
  width: 50%;
`;

const ItemList = styled.div`
  height: 100%;
  width: 100%;
`;

const ItemHeading = styled.div`
  box-sizing: border-box;
  font-size: 20px;
  height: 11%;
`;

const SummaryBody = styled.div`
  width: 100%;
  height: 87%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SummarySpending = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 70px;
  padding: 20px 20px 0 20px;
  color: #00c064;
`;

const SummaryMessage = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #797979;
`;


const History = (props) => {
  return (
    <Container>
      <Top>
        <Spending>
          <ItemHeading>Summary</ItemHeading>
          <SummaryBody>
            <SummarySpending>
              {props.purchases.data?.purchases
                .map((x) => parseFloat(x.price.split("$")[1]))
                .reduce((x, y) => x + y, 0).toFixed(2)}
            </SummarySpending>
            <SummaryMessage>
              Total Purchase Spending Amount
            </SummaryMessage>
          </SummaryBody>
        </Spending>
        <Summary>
          <ItemHeading>Overview</ItemHeading>
          <ProfileChart purchases={props.purchases.data?.purchases} />
        </Summary>
      </Top>
      <Bottom>
        <ItemList>
          <ItemHeading>Purchases</ItemHeading>
          <ProfilePurchaseListing listings={props.purchases.data?.purchases} />
        </ItemList>
      </Bottom>
    </Container>
  );
};

export default History;
