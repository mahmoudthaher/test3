import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category';
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class CategoriesController {
    public async getAll(ctx: HttpContextContract) {
        const token = await ctx.auth.authenticate();
        var result = await Category.all();
        return result;
    }

    public async getById(ctx: HttpContextContract) {
        const token = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var result = await Category.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {

        const newSchema = schema.create({
            name: schema.string(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        const category = new Category();
        category.name = fields.name;
        var result = await category.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {

        const newSchema = schema.create({
            name: schema.string(),
            id: schema.number(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var category = await Category.findOrFail(id);
        category.name = fields.name;
        await category.save();
        return { message: "The category has been updated!" };
    }

    public async destory(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var category = await Category.findOrFail(id);
        await category.delete();
        return { message: "The category has been deleted!" };
    }
}
