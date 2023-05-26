
  export function calculateDiscount(salePrice: string, regularPrice: string): { savedAmount: number; discountPercentage: number } {
    const salePriceValue = parseFloat(salePrice);
    const regularPriceValue = parseFloat(regularPrice);
  
    const savedAmount = regularPriceValue - salePriceValue;
    const discountPercentage = (savedAmount / regularPriceValue) * 100;
  
    return {
      savedAmount,
      discountPercentage,
    };
  }
  