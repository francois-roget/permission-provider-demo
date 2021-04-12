export type Permission = string;

export type User = {
    firstName: string;
    lastName: string;
    permissions: Permission[];
}

export type ElementType = {
    name: string;
    price: number;
    currency: 'EUR' | 'USD';
}
