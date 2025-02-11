# askr3d-product-card

Este es un paquete de pruebas de despliegue en NPM

### askr3d

```
    import {ProductImage, ProductTitle, ProductButtons,} from 'askr3d-product-card';
```

```
    <ProductCard 
        product={ product }
        key={ product.id }
        initialValues={{
            count: 4,
            // maxCount: 10,
        }}
    >
        {
            ({ reset, increaseBy, isMaxCountReached, maxCount, count }) => (
                <>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </>
            )
        }
    </ProductCard>
```