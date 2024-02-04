import { Category } from "../categories/categories.interface"
import { Varieties } from "../varieties/varieties.interface"
import { Supplier } from "../suppliers/suppliers.interface"

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