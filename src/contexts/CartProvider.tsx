import React, {
    useState,
    useEffect,
    createContext,
    ReactElement,
    JSXElementConstructor,
    ReactFragment,
    ReactPortal,
} from 'react';

interface ICartProviderProps {
    children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}

interface Image {
    sourceUrl?: string;
    srcSet?: string;
    title: string;
}

export interface Product {
    cartKey: string;
    name: string;
    qty: number;
    price: number;
    totalPrice: string;
    image: Image;
    productId: number;
}

export interface RootObject {
    products: Product[];
    totalProductsCount: number;
    totalProductsPrice: number;
}

export type TRootObject = RootObject | string | null | undefined;

export type TRootObjectNull = RootObject | null | undefined;

interface ICartContext {
    cart: RootObject | null | undefined;
    setCart: React.Dispatch<React.SetStateAction<TRootObjectNull>>;
}

const CartState = {
    cart: null,
    setCart: () => { },
};

export const CartContext = createContext<ICartContext>(CartState);

/**
 * Fornece um contexto de aplicativo global para todo o aplicativo com o conteúdo do carrinho
 
 */
export const CartProvider = ({ children }: ICartProviderProps) => {
    const [cart, setCart] = useState<RootObject | null>();

    useEffect(() => {
        // Check if we are client-side before we access the localStorage
        if (!process.browser) {
            return;
        }
        const localCartData = localStorage.getItem('woocommerce-cart');

        if (localCartData) {
            const cartData: RootObject = JSON.parse(localCartData);
            setCart(cartData);
        }
    }, []);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};