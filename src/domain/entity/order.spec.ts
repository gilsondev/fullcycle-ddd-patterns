import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      let order = new Order("", "123", []);
    }).toThrowError("Id is required");
  });

  it("should throw error when customerId is empty", () => {
    expect(() => {
      let order = new Order("123", "", []);
    }).toThrowError("CustomerId is required");
  });

  it("Item qtd must be greater than 0", () => {
    expect(() => {
      let order = new Order("123", "112", []);
    }).toThrowError("Items is not empty");
  });

  it("Should calculate total", () => {
    const item1 = new OrderItem("123", "Mouse", 10, "p1", 2);
    const item2 = new OrderItem("345", "Keyboard", 10, "p2", 2);

    const order1 = new Order("123", "112", [item1]);

    let total = order1.total();
    expect(total).toBe(20);

    const order2 = new Order("123", "112", [item1, item2]);

    total = order2.total();
    expect(total).toBe(40);
  });

  it("Should throw error if the item quantity is less or equal to zero", () => {
    expect(() => {
      const item1 = new OrderItem("123", "Mouse", 10, "p1", 0);
      const order1 = new Order("123", "112", [item1]);
    }).toThrowError("Quantity must be greater than 0");
  });
});
