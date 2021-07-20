export class Dress {
    constructor(
        key: string,
        category: string,
        name: string,
        size: string,
        type: string,
        filePath: string,
        price: number,
    ) {
        this.key = key
        this.category = category
        this.name = name
        this.size = size
        this.type = type
        this.filePath = filePath
        this.price = price
    }

    static fromJSON(data: any): Dress {
        return new Dress(data.key, data.category, data.name, data.size, data.type, data.filePath, data.price)
    }

    public key: string
    public category: string
    public name: string
    public size: string
    public type: string
    public filePath: string
    public price: number
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
            price: this.price,
            imageUrl: this.imageUrl,
        }
    }
}
