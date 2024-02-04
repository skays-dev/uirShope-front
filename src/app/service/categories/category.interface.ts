import { Supplier } from "../suppliers/suppliers.interface"
import { Varieties } from "../varieties/variety.interface"

export interface Category {
    idCategory: number,
    nomCategory: string
};

export interface ProductCategory {
    idProduct: number,
    nomProduct: string,
    description: string,
    reference: string,
    prixProduct: number,
    quantity: number,
    category: Category,
    supplier: Supplier,
    varieties: Varieties[],
    imgs: string[],
    colors: string[]
}