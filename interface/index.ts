interface ICustomer {
    name: string;
    age: number;
}

interface IAddress {
    street: string;
}

interface ICustomerProfile extends ICustomer, IAddress {}

const newProfile: ICustomerProfile = {
    name: "Elioenai",
    age: 36,
    street: "Rua XYZ"
}



type TCustomer = {
    name: string,
    age: number
}

type TAddress = {
    street: string
}

type TCustomerProfile = TCustomer & TAddress

const newProfile2: TCustomerProfile = {
    name: "Elioenai",
    age: 36,
    street: "Rua XYZ"
}
