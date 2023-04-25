import Address from "./address";
import Customer from "./customer";

describe("Customer unit tests", () => {
  it("should get 1 as result", () => {
    const result = 1;
    expect(result).toBe(1);
  });

  it("should throw error when id is empty", () => {
    expect(() => {
      let customer = new Customer("", "John");
    }).toThrowError("Id is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      let customer = new Customer("123", "");
    }).toThrowError("Name is required");
  });

  it("should change name", () => {
    // Arrange
    let customer = new Customer("123", "John");

    // Act
    customer.changeName("Jane");

    // Assert
    expect(customer.name).toBe("Jane");
  });

  it("should activate a customer", () => {
    const customer = new Customer("123", "John");
    const address = new Address("Street 1", 123, "12350-123", "Brasilia");
    customer.Address = address;

    customer.activate();

    expect(customer.isActive()).toBe(true);
  });

  it("should deactivate a customer", () => {
    const customer = new Customer("123", "John");

    customer.deactivate();

    expect(customer.isActive()).toBe(false);
  });

  it("should throw error when you activate a customer without address", () => {
    expect(() => {
      let customer = new Customer("123", "John");
      customer.activate();
    }).toThrowError("Address is mandatory to activate customer");
  });

  it("should add reward points", () => {
    const customer = new Customer("1", "Customer 1");
    expect(customer.rewardPoints).toBe(0);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(10);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(20);
  });
});
