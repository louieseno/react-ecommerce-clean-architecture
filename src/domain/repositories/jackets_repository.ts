import { Jacket as Entity } from "domain/entities/jacket"

export interface JacketsRepository {
    getJackets(): Promise<Entity[]>
    getJacket(productId: string): Promise<Entity>
}
