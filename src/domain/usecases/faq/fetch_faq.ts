import { FaqRepository } from "domain/repositories/faq_repository"

export class FetchFaqUseCase {
    private _repository: FaqRepository
    constructor(repository: FaqRepository) {
        this._repository = repository
    }
    async execute(): Promise<any> {
        return await this._repository.getFAQ()
    }
}
