import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Store from 'App/Models/Store';
import { schema, rules } from '@ioc:Adonis/Core/Validator'
export default class StoresController {
    public async getAll(ctx: HttpContextContract) {
        var result= await Store.query().preload("managerStaff");
        return result;
    }

    public async getById(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var result = await Store.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {

        const newSchema = schema.create({
            manager_staff_id: schema.number(),
            address_id:schema.number()
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        const store = new Store();
        store.managerStaffId = fields.manager_staff_id;
        store.addressId=fields.address_id;
        var result = await store.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {

        
        const newSchema = schema.create({
            manager_staff_id: schema.number(),
            address_id:schema.number(),
            id: schema.number(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var store = await store.findOrFail(id);
        store.managerStaffId = fields.manager_staff_id;
        store.addressId=fields.address_id;
        await store.save();
        return { message: "The store has been updated!" };
    }

    public async destory(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var store = await Store.findOrFail(id);
        await store.delete();
        return { message: "The store has been deleted!" };
    }
}
