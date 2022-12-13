import { facilitiesDto } from "./facilities-dto.dto";

export class storeDto {
    name: String;
    address: String;
    zip: String;
    city: String;
    state: String;
    storePhone: String;
    kitchenPhone: String;
    storeFacilities: facilitiesDto[];
    isActive: String;
}