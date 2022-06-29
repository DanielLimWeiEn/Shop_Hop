import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";

const Product = styled.div`
  height: 30vh;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  border: 0.5px solid lightgray;
  border-radius: 10px;
`;

const ProductDetail = styled.div`
  display: flex;
  height: 100%;
  width: 70%;
`;

const Image = styled.img`
  height: 100%;
  width: 35%;
  min-width: 35%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  object-fit: cover;
`;

const Details = styled.div`
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductId = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PriceDetail = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const CartProduct = (props) => {
  return (
    <Product>
      <ProductDetail>
        <Image src={props.item.image} />
        <Details>
          <ProductName>
            <b>Product:</b> {props.item.name}
          </ProductName>
          <ProductId>
            <b>ID:</b> {props.item.val}{" "}
          </ProductId>
        </Details>
      </ProductDetail>
      <PriceDetail>
        <ProductAmountContainer>
          <Add value={props.item.val} onClick={props.addOne} />
          <ProductAmount>{props.item.quantity}</ProductAmount>
          <Remove value={props.item.val} onClick={props.minusOne} />
        </ProductAmountContainer>
        <ProductPrice>
          ${" "}
          {(
            parseFloat(props.item.price.split("$")[1]) * props.item.quantity
          ).toFixed(2)}
        </ProductPrice>
      </PriceDetail>
    </Product>
  );
};

export default CartProduct;
