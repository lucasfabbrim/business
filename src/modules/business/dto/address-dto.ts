import { Business } from "../entities/business"

export interface AddressProps{
  id?: string
  street: string
  neighborhood: string
  city: string
  state: string
  complement: string
  postalCode: string
  number: number
  coordinates: number[]
  business: Business
}

export interface AddressRequest{
  street: string
  neighborhood: string
  city: string
  state: string
  complement: string
  postalCode: string
  number: number
}

//ADDRESS-> postalcode -> state -> city -> street -> endereço -> number -> complement -> mape to confirmation;
//BUSINESS-> nameOfOwner -> docOfOwner -> CNPJ -> RAZÃO SOCIAL -> ESPECIALIDADE;
//PLANS
//SIGNING-CONTRACT;