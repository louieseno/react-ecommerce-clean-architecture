import { Jacket as Entity } from "domain/entities/jacket"

export interface JacketRepository {
    getJackets(): Promise<Entity[]>
    getJacket(productId: string): Promise<Entity>
}
