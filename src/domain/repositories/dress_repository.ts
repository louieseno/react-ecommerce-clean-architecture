import { Dress as Entity } from "domain/entities/dress"

export interface DresssRepository {
    getDresses(): Promise<Entity[]>
    getDress(productId: string): Promise<Entity>
}
