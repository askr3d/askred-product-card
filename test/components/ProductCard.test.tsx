import React from 'react'
import { fireEvent, render } from "@testing-library/react";
import { product1 } from "../data/products";
import ProductCard from "../../src/components";

describe('ProductCard', () => {
    test('debe de mostrar el componente correctamente', () => {
        const { asFragment } = render(
            <ProductCard product={product1}>
                {
                    () => (
                        <h1>Product Card</h1>
                    )
                }
            </ProductCard>
        );

        expect( asFragment() ).toMatchSnapshot();
    });

    test('debe de incrementar el contador', () => {
        const { asFragment, container } = render(
            <ProductCard product={product1}>
                {
                    ({count, increaseBy}) => (
                        <>
                            <h1>Product Card</h1>
                            <span>{ count }</span>
                            <button onClick={() => increaseBy(1)}></button>
                        </>
                    )
                }
            </ProductCard>
        );

        let tree = asFragment();
        expect( tree ).toMatchSnapshot();
        
        const initialCount = container.querySelector('span');
        expect(initialCount?.textContent).toBe('0');

        fireEvent.click(container.querySelector('button')!);

        const updatedCount = container.querySelector('span');
        expect(updatedCount?.textContent).toBe('1');
    });
});