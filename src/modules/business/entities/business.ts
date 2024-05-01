import { uuid } from "uuidv4";
import { Address } from "./address";
import { BusinessProps, Specifications } from "../dto/business-dto";

export class Business{
  private _id?: string
  private _ownerName: string
  private _ownerDocument: string
  private _document: string
  private _tradingName: string
  private _createdAt: Date
  private _updatedAt: Date
  private _address: Address
  private _specifications: Specifications

  private constructor(props: BusinessProps){
    this._id = uuid()
    this._ownerName = props.ownerName
    this._ownerDocument = props.ownerDocument
    this._document = props.document
    this._tradingName = props.tradingName
    this._createdAt = props.createdAt
    this._updatedAt = props.updatedAt
    this._address = props.address
    this._specifications = props.specifications
  }

  get id(){
    return this._id;
  }
  get ownerName(){
    return this._ownerName;
  }
  get ownerDocument(){
    return this._ownerDocument;
  }
  get document(){
    return this._document;
  }
  get tradingName(){
    return this._tradingName;
  }
  get createAt(){
    return this._createdAt;
  }
  get updateAt(){
    return this._updatedAt;
  }
  get address(){
    return this._address;
  }
  get specifications(){
    return this._specifications;
  }

}