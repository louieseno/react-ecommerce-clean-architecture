export class ReturnPolicy {
    constructor(key: string, policy: Array<any>) {
        this.key = key
        this.policy = policy
    }

    static fromJSON(data: any): ReturnPolicy {
        return new ReturnPolicy(data.key, data.policy || [])
    }

    public key: string
    public policy: Array<any>

    toJSON(): any {
        return {
            key: this.key,
            policy: this.policy,
        }
    }
}
