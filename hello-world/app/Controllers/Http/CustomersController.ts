import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Customer from 'App/Models/Customer';
export default class CustomersController {
    public async getAll(ctx: HttpContextContract) {
        const token = await ctx.auth.authenticate();
        var result = await Customer.query().preload("store").preload("address");
        return result;
    }

    public async getById(ctx: HttpContextContract) {
        const token = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var result = await Customer.query().preload("store").preload("address").where('id',id)
        return result;
    }

    public async create(ctx: HttpContextContract) {

        const newSchema = schema.create({
            storeId: schema.number(),
            firstName: schema.string(),
            lastName: schema.string(),
            addressId: schema.number(),
            active: schema.number(),
            createDate: schema.string()
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var date= ctx.request.all();
        var customer = new Customer();
        customer.storeId = fields.storeId;
        customer.firstName = fields.firstName;
        customer.lastName = fields.lastName;
        customer.email = date.email;
        customer.addressId = fields.addressId;
        customer.createDate = fields.createDate;
        var result = await customer.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {

        const newSchema = schema.create({
            storeId: schema.number(),
            firstName: schema.string(),
            lastName: schema.string(),
            addressId: schema.number(),
            active: schema.number(),
            createDate: schema.string(),
            id:schema.number()
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var date= ctx.request.all();
        var id = fields.id;
        var customer = await Customer.findOrFail(id);
        customer.storeId = fields.storeId;
        customer.firstName = fields.firstName;
        customer.lastName = fields.lastName;
        customer.email = date.email;
        customer.addressId = fields.addressId;
        customer.createDate = fields.createDate;
        await customer.save();
        return { message: "The customer has been updated!" };
    }

    public async destory(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var customer = await customer.findOrFail(id);
        await customer.delete();
        return { message: "The customer has been deleted!" };
    }
}
