import { ReturnPolicyRepository as Repository } from "domain/repositories/return_policy_repository"
import { ReturnPolicy as Entity } from "domain/entities/return_policy"

export class FetchReturnPolicyUseCase {
    private _repository: Repository
    constructor(repository: Repository) {
        this._repository = repository
    }
    async execute(): Promise<Entity[]> {
        return await this._repository.getReturnPolicy()
    }
}
