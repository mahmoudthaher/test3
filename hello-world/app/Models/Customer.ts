import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Customer extends BaseModel {

  public static table ='customers'

  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "store_id" })
  public storeId: number

  @column({ serializeAs: "first_name" })
  public firstName: string

  @column({ serializeAs: "last_name" })
  public lastName: string

  @column({ serializeAs: "email" })
  public email: string

  @column({ serializeAs: "address_id" })
  public addressId: number

  @column({ serializeAs: "active" })
  public active: number

  @column({ serializeAs: "create_date" })
  public createDate: string
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
