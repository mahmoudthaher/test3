import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class City extends BaseModel {

  public static table = 'cities'

  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "city" })
  public city: string;

  @column({ serializeAs: "country_id" })
  public countryId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
