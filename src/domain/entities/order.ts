export class Order {
    public productId = ""
    public name = ""
    public category = ""
    public size = ""
    public type = ""
    public qty = 1
    public rate = 0
    public price = 0

    static fromJSON(data: any): Order {
        const order = new Order()
        order.productId = data.productId
        order.name = data.name
        order.category = data.category
        order.size = data.size
        order.type = data.type
        order.qty = data.qty
        order.rate = data.rate
        order.price = data.price
        return order
    }

    toJSON(): any {
        return {
            productId: this.productId,
            name: this.name,
            category: this.category,
            size: this.size,
            type: this.type,
            qty: this.qty,
            rate: this.rate,
            price: this.price,
        }
    }
}
