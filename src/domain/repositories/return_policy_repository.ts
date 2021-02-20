import { ReturnPolicy as Entity } from "domain/entities/return_policy"

export interface ReturnPolicyRepository {
    getReturnPolicy(): Promise<Entity[]>
}
