import { Address } from "../entities/address"

export interface BusinessProps{
  id?: string
  document: string
  tradingName: string
  ownerName: string
  ownerDocument: string
  createdAt: Date
  updatedAt: Date
  address: Address
  specifications: Specifications
}

export interface BusinessRequest{
  ownerName: string
  ownerDocument: string
  document: string
  tradingName: string
}

export enum Specifications{
  BAR,
  RESTAURANT
}