import { IProduct } from "./product.model";

export interface IApiResponse {
    result: IProduct[] | null,
    error: Error | null
}