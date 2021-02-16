export class FAQ {
    constructor(key: string, answers: Map<string, string>, questions: Map<string, string>) {
        this.key = key
        this.answers = answers
        this.questions = questions
    }

    static fromJSON(data: any): FAQ {
        return new FAQ(data.key, data.Answers || {}, data.Questions || {})
    }

    public key: string
    public answers: Map<string, string>
    public questions: Map<string, string>

    toJSON(): any {
        return {
            key: this.key,
            answers: this.answers,
            questions: this.questions,
        }
    }
}
