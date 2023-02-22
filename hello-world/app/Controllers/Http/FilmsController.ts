import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Film from 'App/Models/Film';
export default class FilmsController {
    public async getAll(ctx: HttpContextContract) {
        const token = await ctx.auth.authenticate();
        var result = await Film.query().preload("language")
        return result;
    }
    public async getById(ctx: HttpContextContract) {
        const token = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var result = await Film.query().preload("language").where('id',id)
        return result;
    }
    public async create(ctx: HttpContextContract) {

        const newSchema = schema.create({
            title: schema.string(),
            description: schema.string(),
            languageId:schema.number(),
            rentalDuration:schema.number(),
            rentalRate:schema.number(),
            replacementCost:schema.number(),
            rating:schema.string()

        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var film = new Film();
        film.title = fields.title;
        film.description = fields.description;
        film.languageId=fields.languageId
        film.rentalDuration = fields.rentalDuration;
        film.rentalRate = fields.rentalRate;
        film.replacementCost=fields.replacementCost
        film.rating=fields.rating
        await film.save();
        return { message: "The film has been created!" };
    }
    public async update(ctx: HttpContextContract) {

        const newSchema = schema.create({
            title: schema.string(),
            description: schema.string(),
            languageId:schema.number(),
            rentalDuration:schema.number(),
            rentalRate:schema.number(),
            replacementCost:schema.number(),
            rating:schema.string(),
            id: schema.number()
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var film = await Film.findOrFail(id);
        film.title = fields.title;
        film.description = fields.description;
        film.languageId=fields.languageId
        film.rentalDuration = fields.rentalDuration;
        film.rentalRate = fields.rentalRate;
        film.replacementCost=fields.replacementCost
        film.rating=fields.rating
        await film.save();
        return { message: "The film has been updated!" };
    }
    public async destory(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var film = await Film.findOrFail(id);
        await film.delete();
        return { message: "The film has been deleted!" };
    }
}
