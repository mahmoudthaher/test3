import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Address from 'App/Models/Address';

export default class AddressesController {
    public async getAll(ctx: HttpContextContract) {
        const token = await ctx.auth.authenticate();
        var result =await Address.query().preload("city")
        return result;
    }

    public async getById(ctx: HttpContextContract) {
        const token = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var result = await Address.query().preload("city").where('id',id)
        return result;
    }

    public async create(ctx: HttpContextContract) {

        const newSchema = schema.create({
            address: schema.string(),
            district: schema.string(),
            cityId:schema.number(),
            postalCode:schema.string(),
            phone:schema.string(),
            id:schema.number()
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var address = new Address();
        address.address = fields.address;
        address.district = fields.district;
        address.cityId=fields.cityId;
        address.postalCode=fields.postalCode;
        address.phone=fields.phone;
        address.id=fields.id
        var result = await address.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {

        const newSchema = schema.create({
            address: schema.string(),
            district: schema.string(),
            cityId:schema.number(),
            postalCode:schema.string(),
            phone:schema.string(),
            id:schema.number()
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var address = await Address.findOrFail(id);
        address.address = fields.address;
        address.district = fields.district;
        address.cityId=fields.cityId;
        address.postalCode=fields.postalCode;
        address.phone=fields.phone;
        address.id=fields.id
        await address.save();
        return { message: "The address has been updated!" };
    }

    public async destory(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var address = await Address.findOrFail(id);
        await address.delete();
        return { message: "The address has been deleted!" };
    }
}
