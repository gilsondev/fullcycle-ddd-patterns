import Customer from "../entity/customer";
import Order from "../entity/order";
import OrderItem from "../entity/order_item";
import OrderService from "./order.service";

describe("Order service unit test", () => {
  it("chould place an order", () => {
    const customer = new Customer("c1", "Customer 1");
    const item1 = new OrderItem("i1", "Item 1", 10, "p1", 1);

    const order = OrderService.placeOrder(customer, [item1]);

    expect(customer.rewardPoints).toBe(5);
    expect(order.total()).toBe(10);
  });
  it("should get total of all orders", () => {
    const item1 = new OrderItem("123", "Item 1", 100, "prod1", 1);
    const item2 = new OrderItem("456", "Item 2", 200, "prod2", 2);

    const order1 = new Order("123", "cust1", [item1]);
    const order2 = new Order("456", "cust1", [item2]);

    const total = OrderService.total([order1, order2]);

    expect(total).toBe(500);
  });
});
