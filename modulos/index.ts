import { paginationPerPage, Customer } from "./customer";

interface SpecialCustomer extends Customer {
    couponQuantity: number
}

const specialCustomer: SpecialCustomer = {
    couponQuantity: 10,
    name: "Elioenai",
    age: 36
}