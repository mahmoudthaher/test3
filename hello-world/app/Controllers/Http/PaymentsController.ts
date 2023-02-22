import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { DateTime } from 'luxon';
import Payment from 'App/Models/Payment';
export default class PaymentsController {

    public async getAll(ctx: HttpContextContract) {
        const token = await ctx.auth.authenticate();
        var result = await Payment.query().preload("customer").preload("rental").preload("staff");
        return result;
    }

    public async getById(ctx: HttpContextContract) {
        const token = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var result = await Payment.query().preload("customer").preload("rental").preload("staff").where('id', id);
        return result;
    }

    public async create(ctx: HttpContextContract) {

        const newSchema = schema.create({
            customerId: schema.number(),
            staffId: schema.number(),
            rentalId: schema.number(),
            amount: schema.number(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        const date = ctx.request.all()
        const payment = new Payment();
        payment.customerId = fields.customerId;
        payment.staffId = fields.staffId;
        payment.rentalId = fields.rentalId;
        payment.amount = fields.amount;
        payment.paymentDate = date.paymentDate;
        var result = await payment.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {

        const newSchema = schema.create({
            customerId: schema.number(),
            staffId: schema.number(),
            rentalId: schema.number(),
            amount: schema.number(),
            id: schema.number()
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        const date = ctx.request.all()
        var id = fields.id;
        var payment = await Payment.findOrFail(id);
        payment.customerId = fields.customerId;
        payment.staffId = fields.staffId;
        payment.customerId = fields.customerId;
        payment.amount = fields.amount;
        payment.paymentDate = date.paymentDate;
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
