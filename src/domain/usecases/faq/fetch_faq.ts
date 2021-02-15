import { FaqRepository } from "domain/repositories/faq_repository"
import { FAQ as Entity } from "domain/entities/faq"

export class FetchFaqUseCase {
    private _repository: FaqRepository
    constructor(repository: FaqRepository) {
        this._repository = repository
    }
    async execute(): Promise<Entity[]> {
        return await this._repository.getFAQ()
    }
}
