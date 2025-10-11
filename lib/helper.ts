export const serializeCarData = (car: any, wishlisted: boolean = false) => {
    return {
        ...car,
        price: car.price ? parseFloat(car.price.toString()) : 0,
        createdAt: car.createdAt ? car.createdAt.toISOString() : null,
        updatedAt: car.updatedAt ? car.updatedAt.toISOString() : null,
        wishlisted
    }
}

// export const formatCurrency = (price: string): string => {
//     return price.replace(/\$/g, "").trim(); 
//   };
export const formatCurrency = (amount: string | number): string => {
    return  new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(typeof amount === 'string' ? parseFloat(amount) : amount);
}

export const searchDebounce = (func: (...args: any[]) => void, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};