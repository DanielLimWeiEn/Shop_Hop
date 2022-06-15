import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import CartProduct from "../components/CartProducts";
import CartSummary from "../components/CartSummary";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  width: 100%;
  height: 75vh;
  overflow-y: scroll;
`;

const Cart = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("cart")));
  const navigation = useNavigate();

  const addOne = (event) => {
    setItems(
      items.map((x) => {
        if (
          x.val === parseInt(event.nativeEvent.target.getAttribute("value"))
        ) {
          x.quantity = x.quantity + 1;
        }

        return x;
      })
    );

    localStorage.setItem("cart", JSON.stringify(items));
    navigation("/cart");
  };

  const minusOne = (event) => {
    setItems(
      items
        .map((x) => {
          if (
            x.val === parseInt(event.nativeEvent.target.getAttribute("value"))
          ) {
            if (x.quantity >= 1) {
              x.quantity--;
            }
          }

          return x;
        })
        .filter((x) => x.quantity >= 1)
    );

    localStorage.setItem("cart", JSON.stringify(items));
    navigation("/cart");
  };

  useEffect(() => {
    const updateStorage = () => {
      localStorage.setItem("cart", JSON.stringify(items));
    };

    updateStorage();
  }, [items]);

  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {items.map((item) => {
              return (
                item.quantity > 0 && (
                  <CartProduct
                    addOne={addOne}
                    minusOne={minusOne}
                    item={item}
                  />
                )
              );
            })}
          </Info>
          <CartSummary items={items} setItems={setItems} />
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
