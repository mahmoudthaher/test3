import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
export default class ProductsController {


    public async getProductsByIdForEdit(ctx: HttpContextContract){
        return "products by id for  edit"
      }
    public async getOrdersByProductsId(ctx: HttpContextContract){
        return "get comments by post id"
      }

    public async getProductsId(ctx: HttpContextContract){
        return "get products by id "
      }
    public async getAll(ctx: HttpContextContract){
        return "get all products"
      }
   
    public async postNewProducts(ctx: HttpContextContract){
        return " get new products"
      }
    
    public async putProductsId(ctx: HttpContextContract){
        return "Update products by id"
      }
  
    public async deleteProductsId(ctx: HttpContextContract){
        return "delete products by id"
      }
  
    
}
