export class Jackets {
    constructor(key: string, category: string, name: string, size: string, type: string, filePath: string) {
        this.key = key
        this.category = category
        this.name = name
        this.size = size
        this.type = type
        this.filePath = filePath
    }

    static fromJSON(data: any): Jackets {
        return new Jackets(data.key, data.category, data.name, data.size, data.type, data.filePath)
    }

    public key: string
    public category: string
    public name: string
    public size: string
    public type: string
    public filePath: string
    public imageUrl = ""

    setImageUrl(url: string) {
        this.imageUrl = url
    }

    toJSON(): any {
        return {
            key: this.key,
            category: this.category,
            name: this.name,
            size: this.size,
            type: this.type,
            filePath: this.filePath,
        }
    }
}
