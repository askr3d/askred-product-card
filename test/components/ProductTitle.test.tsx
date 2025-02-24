import React from "react";
import ProductCard, { ProductTitle } from '../../src/components';
import { render } from "@testing-library/react";
import { product1 } from "../data/products";

describe('ProductTitle', () => { 
    test('debe de mostrar el componente correctamente con el titulo personalizado', () => {
        const { asFragment } = render(
            <ProductTitle title='Custom Title' className="custom-class" />
        )
        
        expect( asFragment() ).toMatchSnapshot();
    });

    test('debe de mostrar el componente con el nombre del producto', () => {
        const { asFragment } = render(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        )
        
        expect( asFragment() ).toMatchSnapshot();
    });
});