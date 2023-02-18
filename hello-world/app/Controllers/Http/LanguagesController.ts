import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class LanguagesController {
    public async getAll(ctx: HttpContextContract) {
        return Database.from('languages').select('*');
    }

    public async getById(ctx: HttpContextContract) {
        var id = ctx.params.id;
        const result = await Database.from('languages').select('*').where('id', id);
        return result[0];
    }

    public async create(ctx: HttpContextContract) {
        var fields = ctx.request.all();
        await Database.table('languages').insert({
            name: fields.name
        })
        return { message: 'the language has been created' }
    }

    public async update(ctx: HttpContextContract) {
        var fields = ctx.request.all();
        await Database.from('languages').where('id', fields.id).update({
            name: fields.name
        })
        return { message: "the language has been updated" }
    }

    public async delete(ctx: HttpContextContract) {
        var id = ctx.params.id;
        await Database.from('languages').where('id', id).delete();
        return { message: 'the languages has been deleted' }
    }

}
