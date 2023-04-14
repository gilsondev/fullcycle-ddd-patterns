import Address from "./address";

class Customer {
    _id: string;
    _name: string;
    _address!: Address;
    _active: boolean = false;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validateAll();
    }

    validateName() {
        if (this._name.length === 0) {
            throw new Error("Name is required");
        }
    }

    validateActivate() {
        if (this._address === undefined) {
            throw new Error("Address is mandatory to activate customer")
        }
    }

    validateAll() {
        this.validateName();

        if (this._id.length === 0) {
            throw new Error("Id is required");
        }
    }

    changeName(name: string) {
        this._name = name;
        this.validateName();
    }

    activate() {
        this._active = true;
        this.validateActivate();
    }

    deactivate() {
        this._active = false;
    }

    set Address(address: Address) {
        this._address = address
    }
}