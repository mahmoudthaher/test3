import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Language from 'App/Models/Language';

export default class LanguagesController {
    public async getAll(ctx: HttpContextContract) {
        var result = await Language.all();
        return result
    }

    public async getById(ctx: HttpContextContract) {
        var id = ctx.params.id;
        const result = await Language.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {
        const newSchema = schema.create({
            name: schema.string()
        })
        const fields = await ctx.request.validate({ schema: newSchema })
        const language = new Language();
        language.name = fields.name;
        var result = await language.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {

        const newSchema = schema.create({
            name: schema.string(),
            id: schema.number()
        })
        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var language = await Language.findOrFail(id);
        language.name = fields.name;
        await language.save();
        return { message: "the language has been updated" }
    }

    public async delete(ctx: HttpContextContract) {

        var id = ctx.params.id
        var language = await Language.findOrFail(id);
        await language.delete();
        return { message: 'the languages has been deleted' }
    }

}
