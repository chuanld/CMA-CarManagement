//for car
export const carTypes = ["SALE", "RENT", "BOTH"] as const;
export const fuelTypes = ['Petrol', 'Diesel', 'Electric', 'Hybrid', 'Hydrogen', 'Plug-in Hybrid', 'Gasoline'] as const;
export const transmissionTypes = ['Manual', 'Automatic', 'Semi-Automatic','CVT', 'Dual-Clutch'] as const;
export const bodyTypes = ['Sedan', 'SUV', 'Hatchback', 'Coupe', 'Convertible', 'Wagon', 'Van', 'Truck'] as const;

//for sale
export const saleStatuses = ['AVAILABLE', 'RESERVED', 'SOLD', 'NEGOTIATION'] as const;

//for rent
export const availableRentStatuses = [{ value: true, label: 'AVAILABLE' }, { value: false, label: 'MAINTENANCE' }] as const;

