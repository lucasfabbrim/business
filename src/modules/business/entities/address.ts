import { AddressProps, AddressRequest } from "../dto/address-dto";
import { uuid } from 'uuidv4'
import { Business } from "./business";

export class Address{
  private _id?: string;
  private _street: string;
  private _neighborhood: string;
  private _city: string;
  private _state: string;
  private _complement: string;
  private _postalCode: string;
  private _number: number;
  private _coordinates: number[];
  private _business: Business;

  public constructor(data: AddressProps){
    this._id = uuid();
    this._street = data.street
    this._neighborhood = data.neighborhood
    this._city = data.city
    this._state = data.state
    this._complement = data.complement
    this._postalCode = data.postalCode
    this._number = data.number
    this._coordinates = data.coordinates
    this._business = data.business
  }

  get id(): string | undefined {
    return this._id;
  }

  get street(): string {
    return this._street;
  }

  get neighborhood(): string {
    return this._neighborhood;
  }

  get city(): string {
    return this._city;
  }

  get state(): string {
    return this._state;
  }

  get complement(): string {
    return this._complement;
  }

  get postalCode(): string {
    return this._postalCode;
  }

  get number(): number {
    return this._number;
  }

  get coordinates(): number[] {
    return this._coordinates;
  }

  get business(): Business {
    return this._business;
  }
}
