import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Rental from 'App/Models/Rental';
export default class RentalsController {
    public async getAll(ctx: HttpContextContract) {
        const token = await ctx.auth.authenticate();
        var result= await Rental.query().preload("customer").preload("inventory").preload("staff");
        return result;
    }

    public async getById(ctx: HttpContextContract) {
        const token = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var result = await Rental.query().preload("customer").preload("inventory").preload("staff").where('id',id)
        return result;
    }

    public async create(ctx: HttpContextContract) {

        const newSchema = schema.create({
            inventoryId:schema.number(),
            customerId: schema.number(),
            staffId: schema.number()
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var day = ctx.request.all();
        const rental = new Rental();
        rental.rentalDate = day.rentalDate;
        rental.inventoryId = fields.inventoryId;
        rental.customerId = fields.customerId;
        rental.returnDate = day.returnDate;
        rental.staffId = fields.staffId;
        var result = await rental.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {

        const newSchema = schema.create({
            inventoryId:schema.number(),
            customerId: schema.number(),
            staffId: schema.number(),
            id:schema.number()
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var day = ctx.request.all();
        var id = fields.id;
        var rental = await Rental.findOrFail(id);
        rental.rentalDate = day.rentalDate;
        rental.inventoryId = fields.inventoryId;
        rental.customerId = fields.customerId;
        rental.returnDate = day.returnDate;
        rental.staffId = fields.staffId;
        await rental.save();
        return { message: "The rental has been updated!" };
    }

    public async destory(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var rental = await Rental.findOrFail(id);
        await rental.delete();
        return { message: "The rental has been deleted!" };
    }
}

