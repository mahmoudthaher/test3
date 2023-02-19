import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import City from 'App/Models/City'

export default class CitiesController {

    public async getAll(ctx: HttpContextContract) {
        var result = City.all();
        return result;
    }

    public async getById(ctx: HttpContextContract) {
        var id = ctx.params.id;
        const result = City.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {
        const newSchema = schema.create({
            city: schema.string(),
            countryId: schema.number()
        })
        const fields = await ctx.request.validate({ schema: newSchema })
        var city = new City();
        city.city = fields.city;
        city.countryId = fields.countryId;
        var result = await city.save();
        return result;
    }
    public async update(ctx: HttpContextContract) {
        const newSchema = schema.create({
            city: schema.string(),
            countryId: schema.number(),
            id: schema.number()
        })
        const fields = await ctx.request.validate({ schema: newSchema });
        var id = fields.id
        var city = await City.findOrFail(id)
        city.city = fields.city;
        city.countryId = fields.countryId;
        var result = await city.save();
        return result;
    }

    public async delete(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var city = await City.findOrFail(id);
        await city.delete();
        return { message: "the city has been deleted" }
    }
}
