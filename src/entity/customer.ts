import Address from "./address";

export default class Customer {
    private _id: string;
    private _name: string;
    private _address!: Address;
    private _active: boolean = false;

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

    isActive(): boolean {
        return this._active;
    }

    get name(): string {
        return this._name;
    }

    set Address(address: Address) {
        this._address = address
    }
}