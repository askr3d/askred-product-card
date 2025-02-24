import React from "react";
import ProductCard, { ProductImage } from '../../src/components';
import { render } from "@testing-library/react";
import { product2 } from "../data/products";

describe('ProductImage', () => { 
    test('debe de mostrar el componente correctamente con el titulo personalizado', () => {
        const { asFragment } = render(
            <ProductImage img="https://e7.pngegg.com/pngimages/399/148/png-clipart-pokemon-gold-and-silver-gengar-haunter-pokemon-go-purple-cartoon-thumbnail.png" />
        )
        
        expect( asFragment() ).toMatchSnapshot();
    });

    test('debe de mostrar el componente con la imagen del producto', () => {
        const { asFragment } = render(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )
        
        expect( asFragment() ).toMatchSnapshot();
    });
});