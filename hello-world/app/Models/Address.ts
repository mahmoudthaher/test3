import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Address extends BaseModel {

  public static table ='address'
  
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "address" })
  public address: string

  @column({ serializeAs: "address2" })
  public address2: string

  @column({ serializeAs: "district" })
  public district: string

  @column({ serializeAs: "city_id" })
  public cityId: number

  @column({ serializeAs: "postal_code" })
  public postalCode: string

  @column({ serializeAs: "phone" })
  public phone: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}