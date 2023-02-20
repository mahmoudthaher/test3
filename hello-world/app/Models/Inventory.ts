import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Inventory extends BaseModel {

  public static table ='inventories'

  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "film_id" })
  public filmId: number

  @column({ serializeAs: "store_id" })
  public storeId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
