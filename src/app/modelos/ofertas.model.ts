export interface Ofertas {
    versions: Version[];
    id: string;
    href: string;
}

export interface ValidFor {
    startDateTime: Date;
}

export interface ValidFor2 {
    startDateTime: Date;
}

export interface CharacteristicValue {
    displayValue: string;
    isDefault: boolean;
    validFor: ValidFor2;
    valueType: string;
    value: string;
}

export interface Property {
    isSelected: boolean;
    value: string;
}

export interface Version2 {
    validFor: ValidFor;
    valueType: string;
    name: string;
    id: string;
    type: string;
    characteristicValues: CharacteristicValue[];
    properties: Property[];
    displayValue: string;
    value: string;
}

export interface Characteristic {
    versions: Version2[];
    id: string;
}

export interface ValidFor3 {
    startDateTime: Date;
}

export interface ValueTypeSpecification {
    id: string;
}

export interface Property2 {
    isSelected: boolean;
    value: string;
}

export interface Version4 {
    displayValue: string;
    validFor: ValidFor3;
    valueType: string;
    name: string;
    id: string;
    valueTypeSpecification: ValueTypeSpecification;
    type: string;
    value: string;
    properties: Property2[];
}

export interface Characteristic2 {
    versions: Version4[];
    id: string;
}

export interface Units {
    code: string;
    name: string;
}

export interface Price {
    amount: number;
    units: Units;
}

export interface Version3 {
    characteristics: Characteristic2[];
    markup: number;
    price: Price;
    percentage: number;
    name: string;
    id: string;
    plaId: string;
    popType: string;
    frequency: string;
}

export interface ProductOfferingPrice {
    versions: Version3[];
    id: string;
}

export interface Version {
    characteristics: Characteristic[];
    productOfferingPrices: ProductOfferingPrice[];
    name: string;
    id: string;
}

export interface Offers {
    id: string;
    name: string;
    characteristics: Characteristic[];
    productOfferingPrices: ProductOfferingPrice[];
}