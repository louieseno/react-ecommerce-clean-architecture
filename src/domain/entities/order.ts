export class Order {
    public key = ""
    public productId = ""
    public qty = 1
    public rate = 0
    public price = 0

    fromJSON(data: any): Order {
        const order = new Order()
        order.key = data.key
        order.productId = data.prductId
        order.qty = data.qty
        order.rate = data.rate
        order.price = data.price
        return order
    }

    toJSON(): any {
        return {
            key: this.key,
            productId: this.productId,
            qty: this.qty,
            rate: this.rate,
            price: this.price,
        }
    }
}
