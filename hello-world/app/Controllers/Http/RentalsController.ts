import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Rental from 'App/Models/Rental';
export default class RentalsController {
    public async getAll(ctx: HttpContextContract) {
        var result= Rental.all();
        return result;
    }

    public async getById(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var result = await Rental.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {

        const newSchema = schema.create({
            rentalDate: schema.string(),
            inventoryId:schema.number(),
            customerId: schema.number(),
            returnDate: schema.string(),
            staffId: schema.number()
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        const rental = new Rental();
        rental.rentalDate = fields.rentalDate;
        rental.inventoryId = fields.inventoryId;
        rental.customerId = fields.customerId;
        rental.returnDate = fields.returnDate;
        rental.staffId = fields.staffId;
        var result = await rental.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {

        const newSchema = schema.create({
            rentalDate: schema.string(),
            inventoryId:schema.number(),
            customerId: schema.number(),
            returnDate: schema.string(),
            staffId: schema.number(),
            id:schema.number()
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var rental = await Rental.findOrFail(id);
        rental.rentalDate = fields.rentalDate;
        rental.inventoryId = fields.inventoryId;
        rental.customerId = fields.customerId;
        rental.returnDate = fields.returnDate;
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

