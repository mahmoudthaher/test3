import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import FilmCategory from 'App/Models/FilmCategory';
export default class FilmCategoriesController {
    public async getAll(ctx: HttpContextContract) {
        var result = await FilmCategory.query().preload("film");
        return result;
    }

    public async getById(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var result = await FilmCategory.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {

        const newSchema = schema.create({
            filmId: schema.number(),
            categoryId: schema.number()
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var filmCategory = new FilmCategory();
        filmCategory.filmId = fields.filmId;
        filmCategory.categoryId = fields.categoryId;
        var result = await filmCategory.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {

        const newSchema = schema.create({
            filmId: schema.number(),
            categoryId: schema.number(),
            id: schema.number()
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var filmCategory = await FilmCategory.findOrFail(id);
        filmCategory.filmId = fields.filmId;
        filmCategory.categoryId = fields.categoryId;
        await filmCategory.save();
        return { message: "The film Category has been updated!" };
    }

    public async destory(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var filmCategory = await filmCategory.findOrFail(id);
        await filmCategory.delete();
        return { message: "The film Category has been deleted!" };
    }
}
