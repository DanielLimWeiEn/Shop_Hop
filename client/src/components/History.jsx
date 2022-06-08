import styled from "styled-components";
import { Bar } from "react-chartjs-2";

import ProfilePurchaseListing from "./ProfilePurchaseListing";

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
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  padding: 20px;
  border-bottom: 2px solid;
`;

const SummaryQuote = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 20px;
`;

const History = (props) => {
  return (
    <Container>
      <Top>
        <Summary>
          <ItemHeading>Chart</ItemHeading>
        </Summary>
        <Spending>
          <ItemHeading>Summary</ItemHeading>
          <SummaryBody>
            <SummarySpending>
              Total Spending:{" $"}
              {props.purchases.data?.purchases
                .map((x) => parseFloat(x.price.split("$")[1]))
                .reduce((x, y) => x + y, 0)}
            </SummarySpending>
            <SummaryQuote>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </SummaryQuote>
          </SummaryBody>
        </Spending>
      </Top>
      <Bottom>
        <ItemList>
          <ItemHeading>Items Purchased</ItemHeading>
          <ProfilePurchaseListing listings={props.purchases.data?.purchases} />
        </ItemList>
      </Bottom>
    </Container>
  );
};

export default History;
