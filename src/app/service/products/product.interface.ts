import { Category } from "../categories/category.interface"
import { Etiquettes } from "../etiquettes/etiquette.interface"
import { Supplier } from "../suppliers/suppliers.interface"
import { Varieties } from "../varieties/variety.interface"

export interface Product {
    idProduct: number,
    nomProduct: string,
    description: string,
    reference: string,
    prixProduct: number,
    quantity: number,
    active: boolean | null,
    category: Category,
    supplier: Supplier,
    etiquettes: Etiquettes[],
    varieties: Varieties[],
    imgs: string[],
    colors: string[]
}

export interface ProductAdded {
    name: string,
    reference: string,
    description: string,
    prixProduct: number,
    quantity: number,
    categoryID: number,
    supplierID: number,
    // etiquettes: number[] | undefined,
    
    imgs: string[],
    
    varietyIDs: number[],
    colors: string[] | undefined
}

export interface ProductDetails {
    idProduct: number,
    name: string,
    reference: string,
    description: string,
    prixProduct: number,
    quantity: number,
    categoryID: number,
    supplierID: number,
    // etiquettes: number[] | undefined,
    
    imgs: string[],
    
    varietyIDs: number[],
    colors: string[] | undefined
}