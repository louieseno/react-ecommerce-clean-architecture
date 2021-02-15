import { FAQ as Entity } from "domain/entities/faq"

export interface FaqRepository {
    getFAQ(): Promise<Entity[]>
}
