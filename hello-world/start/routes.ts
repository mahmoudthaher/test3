
import Route from '@ioc:Adonis/Core/Route'
import { Group } from '@japa/runner';
Route.group(() => {
    Route.get('/orders/:products-id', 'ProductsController.getOrdersByProductsId');
    Route.get('/:id/edit', 'ProductsController.getProductsByIdForEdit');
    Route.get('/:id/', 'ProductsController.getProductsId');
    Route.get('/', 'ProductsController.getAll');
    Route.post('/new-products', 'ProductsController.postNewProducts');
    Route.put('/:id/', 'ProductsController.putProductsId');
    Route.delete('/:id/', 'ProductsController.deleteProductsId');
}).prefix("/products");

Route.group(() => {
    Route.group(() => {
        Route.get('/', 'FilmsController.getAll');
    }).prefix("films")
    Route.group(() => {
        Route.get("/:id", "ActorsController.getById");
        Route.get("/", "ActorsController.getAll");
        Route.post("/", "ActorsController.create");
        Route.put("/", "ActorsController.update");
        Route.delete("/:id", "ActorsController.destory");
    }).prefix("/actors");

    Route.group(() => {
        Route.get("/:id", "CategoriesController.getById");
        Route.get("/", "CategoriesController.getAll");
        Route.post("/", "CategoriesController.create");
        Route.put("/", "CategoriesController.update");
        Route.delete("/:id", "CategoriesController.destory");
    }).prefix("/categories");

    Route.group(() => {
        Route.get("/:id", "CountriesController.getById");
        Route.get("/", "CountriesController.getAll");
        Route.post("/", "CountriesController.create");
        Route.put("/", "CountriesController.update");
        Route.delete("/:id", "CountriesController.destory");
    }).prefix("/countries");

    Route.group(() => {
        Route.get("/:id", "StoresController.getById");
        Route.get("/", "StoresController.getAll");
        Route.post("/", "StoresController.create");
        Route.put("/", "StoresController.update");
        Route.delete("/:id", "StoresController.destory");
    }).prefix("/stores");

    Route.group(() => {
        Route.get("/:id", "CitiesController.getById");
        Route.get("/", "CitiesController.getAll");
        Route.post("/", "CitiesController.create");
        Route.put("/", "CitiesController.update");
        Route.delete("/:id", "CitiesController.delete");
    }).prefix("/cities")

    Route.group(() => {
        Route.get('/:id','LanguagesController.getById');
        Route.get('/','LanguagesController.getAll');
        Route.post('/','LanguagesController.create');
        Route.put('/','LanguagesController.update');
        Route.delete('/:id','LanguagesController.delete');        

    }).prefix('languages')

}).prefix("api")








