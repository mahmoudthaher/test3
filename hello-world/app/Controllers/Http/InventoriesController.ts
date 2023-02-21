import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Inventory from 'App/Models/Inventory';
export default class InventoriesController {
    public async getAll(ctx: HttpContextContract) {
        var result= await Inventory.query().preload("film");
        return result;
    }

    public async getById(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var result = await Inventory.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {

        const newSchema = schema.create({
            filmId: schema.number(),
            storeId:schema.number()
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        const inventory = new Inventory();
        inventory.filmId = fields.filmId;
        inventory.storeId = fields.storeId;
        var result = await inventory.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {

        const newSchema = schema.create({
            filmId: schema.number(),
            storeId:schema.number(),
            id:schema.number()
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var inventory = await Inventory.findOrFail(id);
        inventory.filmId = fields.filmId;
        inventory.storeId = fields.storeId;
        await inventory.save();
        return { message: "The inventory has been updated!" };
    }

    public async destory(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var inventory = await Inventory.findOrFail(id);
        await inventory.delete();
        return { message: "The inventory has been deleted!" };
    }
}
