import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import FilmActor from 'App/Models/FilmActor';
import { schema, rules } from '@ioc:Adonis/Core/Validator'
export default class FilmActorsController {
    public async getAll(ctx: HttpContextContract) {
        var result = FilmActor.all();
        return result;
    }

    public async getById(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var result = await FilmActor.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {

        const newSchema = schema.create({
            storeId: schema.number(),
            filmId: schema.number()
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var filmActor = new FilmActor();
        filmActor.actorId = fields.storeId;
        filmActor.filmId = fields.filmId;
        var result = await filmActor.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {

        const newSchema = schema.create({
            storeId: schema.number(),
            filmId: schema.number(),
            id: schema.number()
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var filmActor = await FilmActor.findOrFail(id);
        filmActor.actorId = fields.storeId;
        filmActor.filmId = fields.filmId;
        await filmActor.save();
        return { message: "The film actor has been updated!" };
    }

    public async destory(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var filmActor = await filmActor.findOrFail(id);
        await filmActor.delete();
        return { message: "The film actor has been deleted!" };
    }
}
