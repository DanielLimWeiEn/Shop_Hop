import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";

import { payPayment } from "../api/index";

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  width: 100%;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const CartSummary = (props) => {
  const [stripeToken, setStripeToken] = useState(null);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await payPayment(
          stripeToken,
          props.items.reduce(
            (x, y) => x + y.quantity * parseFloat(y.price.split("$")[1]),
            0
          ) * 100
        );
        console.log(res.data);
        setStripeToken(null);
        props.setItems([]);
      } catch (error) {
        console.log(error);
      }
    };

    stripeToken && makeRequest();
    // eslint-disable-next-line
  }, [stripeToken]);

  const onToken = (token) => {
    setStripeToken(token);
  };

  return (
    <Summary>
      <SummaryTitle>ORDER SUMMARY</SummaryTitle>
      <SummaryItem>
        <SummaryItemText>Subtotal</SummaryItemText>
        <SummaryItemPrice>
          ${" "}
          {props.items.reduce(
            (x, y) => x + y.quantity * parseFloat(y.price.split("$")[1]),
            0
          )}
        </SummaryItemPrice>
      </SummaryItem>
      <SummaryItem>
        <SummaryItemText>Estimated Shipping</SummaryItemText>
        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
      </SummaryItem>
      <SummaryItem>
        <SummaryItemText>Shipping Discount</SummaryItemText>
        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
      </SummaryItem>
      <SummaryItem type="total">
        <SummaryItemText>Total</SummaryItemText>
        <SummaryItemPrice>
          ${" "}
          {props.items.reduce(
            (x, y) => x + y.quantity * parseFloat(y.price.split("$")[1]),
            0
          )}
        </SummaryItemPrice>
      </SummaryItem>
      <StripeCheckout
        name="ShopHop"
        stripeKey="pk_test_51LAlVKHrTVn3XrgZLR6vvc2UlHd8NoMpBNtDwHRi6FQSgS4t0AC4nZF6vkDZiGiBrXJuhReGydG7TH1GA1EptVSD00ILgrAEGt"
        billingAddress
        shippingAddress
        description={`You are paying $${props.items.reduce(
          (x, y) => x + y.quantity * parseFloat(y.price.split("$")[1]),
          0
        )}`}
        amount={
          props.items.reduce(
            (x, y) => x + y.quantity * parseFloat(y.price.split("$")[1]),
            0
          ) * 100
        }
        token={onToken}
      >
        <Button>Buy Now</Button>
      </StripeCheckout>
    </Summary>
  );
};

export default CartSummary;
