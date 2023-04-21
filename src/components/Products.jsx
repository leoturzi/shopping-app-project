import React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
`;

const ProductItem = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: center;
`;

function Products() {
    return (
        <Container>
            {popularProducts.map((item) => (
                <ProductItem>
                    <Product item={item} key={item.id} />
                </ProductItem>
            ))}
        </Container>
    );
}

export default Products;
