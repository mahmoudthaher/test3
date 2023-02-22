import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import FilmText from 'App/Models/FilmText';
export default class FilmTextsController {
    public async getAll(ctx: HttpContextContract) {
        const token = await ctx.auth.authenticate();
        var result = await FilmText.all();
        return result;
    }

    public async getById(ctx: HttpContextContract) {
        const token = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var result = await FilmText.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {

        const newSchema = schema.create({
            title: schema.string(),
            description: schema.string()
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var filmText = new FilmText();
        filmText.title = fields.title;
        filmText.description = fields.description;
        var result = await filmText.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {

        const newSchema = schema.create({
            title: schema.string(),
            description: schema.string(),
            id: schema.number()
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var filmText = await FilmText.findOrFail(id);
        filmText.title = fields.title;
        filmText.description = fields.description;
        await filmText.save();
        return { message: "The film text has been updated!" };
    }

    public async destory(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var filmText = await filmText.findOrFail(id);
        await filmText.delete();
        return { message: "The film text has been deleted!" };
    }
}
