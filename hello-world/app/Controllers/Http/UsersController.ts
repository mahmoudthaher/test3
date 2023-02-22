import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User';
import auth from 'Config/auth';

export default class UsersController {
    public async getAll(ctx: HttpContextContract) {


        const token = await ctx.auth.authenticate();
    }

    public async login(ctx: HttpContextContract) {
        var object = ctx.request.all();
        var email = object.email;
        var password = object.password;
        var result = await ctx.auth.attempt(email, password);
        return result;
    }


    public async logout(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        await ctx.auth.logout();
        return { message: "Logout" }
    }

    public async create(ctx: HttpContextContract) {

        const newSchema = schema.create({
            email: schema.string({}, [
                rules.email(),
                rules.unique({
                    table: 'users',
                    column: 'email',
                })
            ]),
            password: schema.string(),
            fullName: schema.string(),
        });

        const fields = await ctx.request.validate({ schema: newSchema });
        var user = new User();
        user.fullName = fields.fullName;
        user.email = fields.email;
        user.password = fields.password;
        var newUser = await user.save();
        return newUser;

    }
}
