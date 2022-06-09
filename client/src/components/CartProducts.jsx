import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
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
          $ {parseFloat(props.item.price.split("$")[1]) * props.item.quantity}
        </ProductPrice>
      </PriceDetail>
    </Product>
  );
};

export default CartProduct;
