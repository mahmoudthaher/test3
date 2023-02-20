import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Rental extends BaseModel {

  public static table ='rentals'

  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "rental_date" })
  public rentalDate: string

  @column({ serializeAs: "inventory_id" })
  public inventoryId: number

  @column({ serializeAs: "customer_id" })
  public customerId: number

  @column({ serializeAs: "return_date" })
  public returnDate: string

  @column({ serializeAs: "staff_id" })
  public staffId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
