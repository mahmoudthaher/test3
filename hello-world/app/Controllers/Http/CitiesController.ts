import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
export default class CitiesController {
    public async getAll(ctx: HttpContextContract) {
        return Database.from('cities').select('*');
    }

    public async getById(ctx: HttpContextContract) {
        var id = ctx.params.id;
        const result = await Database.from('cities').select('*').where('id', id);
        return result[0];
    }

    public async create(ctx: HttpContextContract) {
        var fields = ctx.request.all();
        await Database.table('cities').insert({
            city: fields.city,
            country_id:fields.country_id
        });
        return ({ message: "the city has been insert" });
    }

    public async update(ctx: HttpContextContract) {
        var fields = ctx.request.all();
        await Database.from('cities').where('id', fields.id).update({
            city: fields.city,
            country_id:fields.country_id
        })
        return ({ message: "the city has been updated" })
    }

    public async delete(ctx: HttpContextContract) {
        var id=ctx.params.id;
        await Database.from('cities').where('id',id).delete();
        return ({message:"the city has been deleted"})
    }
}
