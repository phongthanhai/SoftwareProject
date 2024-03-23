import React, { useContext } from 'react'
import { GlobalContext } from '../../context/AppContext';
import { Container, Row } from 'react-bootstrap';
import ProductCard from '../../components/ProductCard/ProductCard';

const CartPage = () => {
  const { cartList, setCartList } = useContext(GlobalContext);

  return (
    <Container>
      <Row>{cartList.length > 0 || 'CART IS EMPTY'}</Row>
      <Row>
        {cartList.map(product =>
          <ProductCard
            product={product} />)}
      </Row>

    </Container>
  )
}

export default CartPage