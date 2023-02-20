import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Payment from 'App/Models/Payment';
export default class PaymentsController {

    public async getAll(ctx: HttpContextContract) {
        var result= Payment.all();
        return result;
    }

    public async getById(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var result = await Payment.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {

        const newSchema = schema.create({
            customerId: schema.number(),
            staffId:schema.number(),
            rentalId: schema.number(),
            amount: schema.number(),
            paymentDate: schema.string()
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        const payment = new Payment();
        payment.customerId = fields.customerId;
        payment.staffId = fields.staffId;
        payment.customerId = fields.customerId;
        payment.amount = fields.amount;
        payment.paymentDate = fields.paymentDate;
        var result = await payment.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {

        const newSchema = schema.create({
            customerId: schema.number(),
            staffId:schema.number(),
            rentalId: schema.number(),
            amount: schema.number(),
            paymentDate: schema.string(),
            id:schema.number()
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var payment = await Payment.findOrFail(id);
        payment.customerId = fields.customerId;
        payment.staffId = fields.staffId;
        payment.customerId = fields.customerId;
        payment.amount = fields.amount;
        payment.paymentDate = fields.paymentDate;
        await payment.save();
        return { message: "The payment has been updated!" };
    }

    public async destory(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var payment = await Payment.findOrFail(id);
        await payment.delete();
        return { message: "The payment has been deleted!" };
    }
}
