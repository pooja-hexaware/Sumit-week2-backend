import { allowedToppingsDto } from "./allowedtoppings-dto.dto";

export class menuDto {
    name: String;
    description: String;
    amount: String;
    quantity: String;
    allowedToppings: allowedToppingsDto[];
}