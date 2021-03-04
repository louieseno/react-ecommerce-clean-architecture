import { Jackets as Entity } from "domain/entities/jackets"

export interface JacketsRepository {
    getJackets(): Promise<Entity[]>
}
