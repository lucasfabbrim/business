import { Business } from "../entities/business"

export interface EmployeesProps {
  id?: string
  name: string
  email: string
  phone: string
  document: string
  stats: boolean
  business: Business
  createdAt: Date
  updatedAt: Date
}

export interface EmployeesRequest {
  name: string
  email: string
  phone: string
}

//COSTUMER -> //-> email -> validate -> phone -> validate -> name/document -> validate/number -> address -> ok! 
//EMPLOYEES -> //-> name -> email -> phone ->  validate/email/whatsapp/call;