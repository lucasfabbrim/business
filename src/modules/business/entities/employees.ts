import { EmployeesProps } from "../dto/employees-dto"
import { uuid } from "uuidv4";
import { Business } from "./business";

export class Employees{
  private _id?: string
  private _name: string
  private _email: string
  private _phone: string
  private _document: string
  private _business?: Business
  private _stats?: boolean
  private _createdAt: Date
  private _updatedAt: Date

  private constructor(props: EmployeesProps){
    this._id = uuid()
    this._name = props.name
    this._email = props.email
    this._phone = props.phone
    this._document = props.document
    this._business = props.business
    this._stats = props.stats
    this._createdAt = props.createdAt
    this._updatedAt = props.updatedAt
  }

  get id(){
    return this._id
  }
  get name(){
    return this._name
  }
  get email(){
    return this._email
  }
  get phone(){
    return this._phone
  }
  get document(){
    return this._document
  }
  get stats(){
    return this._stats
  }
  get business(){
    return this._business
  }
  get createdAt(){
    return this._createdAt
  }
  get updatedAt(){
    return this._updatedAt
  }
}