import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class FilmsController {
    public async getAll(ctx: HttpContextContract) {
        return Database
            .from('films')
            .select('*')
            
    }
}
