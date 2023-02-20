import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Staff from 'App/Models/Staff';
export default class StaffsController {
    public async getAll(ctx: HttpContextContract) {
        var result= Staff.all();
        return result;
    }

    public async getById(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var result = await Staff.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {

        const newSchema = schema.create({
            firstName: schema.string(),
            lastName:schema.string(),
            addressId: schema.number(),
            email: schema.string(),
            storeId: schema.number(),
            active: schema.number(),
            username:schema.string(),
            password: schema.string()
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        const staff = new Staff();
        staff.firstName = fields.firstName;
        staff.lastName = fields.lastName;
        staff.addressId = fields.addressId;
        staff.email = fields.email;
        staff.storeId = fields.storeId;
        staff.active = fields.active;
        staff.username = fields.username;
        staff.password = fields.password;
        var result = await staff.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {

        const newSchema = schema.create({
            firstName: schema.string(),
            lastName:schema.string(),
            addressId: schema.number(),
            email: schema.string(),
            storeId: schema.number(),
            active: schema.number(),
            username:schema.string(),
            password: schema.string(),
            id:schema.number()
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var staff = await Staff.findOrFail(id);
        staff.firstName = fields.firstName;
        staff.lastName = fields.lastName;
        staff.addressId = fields.addressId;
        staff.email = fields.email;
        staff.storeId = fields.storeId;
        staff.active = fields.active;
        staff.username = fields.username;
        staff.password = fields.password;
        await staff.save();
        return { message: "The staff has been updated!" };
    }

    public async destory(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var staff = await Staff.findOrFail(id);
        await staff.delete();
        return { message: "The staff has been deleted!" };
    }
}
