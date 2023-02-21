import Route from '@ioc:Adonis/Core/Route'

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
        Route.get("/:id", "ActorsController.getById");
        Route.get("/", "ActorsController.getAll");
        Route.post("/", "ActorsController.create");
        Route.put("/", "ActorsController.update");
        Route.delete("/:id", "ActorsController.destory");
    }).prefix("/actors");

    Route.group(() => {
        Route.get("/:id", "AddressesController.getById");
        Route.get("/", "AddressesController.getAll");
        Route.post("/", "AddressesController.create");
        Route.put("/", "AddressesController.update");
        Route.delete("/:id", "AddressesController.destory");
    }).prefix("/address");

    Route.group(() => {
        Route.get("/:id", "CategoriesController.getById");
        Route.get("/", "CategoriesController.getAll");
        Route.post("/", "CategoriesController.create");
        Route.put("/", "CategoriesController.update");
        Route.delete("/:id", "CategoriesController.destory");
    }).prefix("/categories");

    Route.group(() => {
        Route.get("/:id", "CitiesController.getById");
        Route.get("/", "CitiesController.getAll");
        Route.post("/", "CitiesController.create");
        Route.put("/", "CitiesController.update");
        Route.delete("/:id", "CitiesController.delete");
    }).prefix("/cities")

    Route.group(() => {
        Route.get("/:id", "CountriesController.getById");
        Route.get("/", "CountriesController.getAll");
        Route.post("/", "CountriesController.create");
        Route.put("/", "CountriesController.update");
        Route.delete("/:id", "CountriesController.destory");
    }).prefix("/countries");

    Route.group(() => {
        Route.get("/:id", "CustomersController.getById");
        Route.get("/", "CustomersController.getAll");
        Route.post("/", "CustomersController.create");
        Route.put("/", "CustomersController.update");
        Route.delete("/:id", "CustomersController.destory");
    }).prefix("/customers");

    Route.group(() => {
        Route.get("/:id", "FilmActorsController.getById");
        Route.get("/", "FilmActorsController.getAll");
        Route.post("/", "FilmActorsController.create");
        Route.put("/", "FilmActorsController.update");
        Route.delete("/:id", "FilmActorsController.destory");
    }).prefix("/film_actors");

    Route.group(() => {
        Route.get("/:id", "FilmCategoriesController.getById");
        Route.get("/", "FilmCategoriesController.getAll");
        Route.post("/", "FilmCategoriesController.create");
        Route.put("/", "FilmCategoriesController.update");
        Route.delete("/:id", "FilmCategoriesController.destory");
    }).prefix("/film_categories");

    Route.group(() => {
        Route.get("/:id", "FilmTextsController.getById");
        Route.get("/", "FilmTextsController.getAll");
        Route.post("/", "FilmTextsController.create");
        Route.put("/", "FilmTextsController.update");
        Route.delete("/:id", "FilmTextsController.destory");
    }).prefix("/film_text");

    Route.group(() => {
        Route.get("/:id", "FilmsController.getById");
        Route.get("/", "FilmsController.getAll");
        Route.post("/", "FilmsController.create");
        Route.put("/", "FilmsController.update");
        Route.delete("/:id", "FilmsController.destory");
    }).prefix("/films");

    Route.group(() => {
        Route.get("/:id", "InventoriesController.getById");
        Route.get("/", "InventoriesController.getAll");
        Route.post("/", "InventoriesController.create");
        Route.put("/", "InventoriesController.update");
        Route.delete("/:id", "InventoriesController.destory");
    }).prefix("/inventories");

    Route.group(() => {
        Route.get('/:id','LanguagesController.getById');
        Route.get('/','LanguagesController.getAll');
        Route.post('/','LanguagesController.create');
        Route.put('/','LanguagesController.update');
        Route.delete('/:id','LanguagesController.delete');        
    }).prefix('languages')

    Route.group(() => {
        Route.get("/:id", "PaymentsController.getById");
        Route.get("/", "PaymentsController.getAll");
        Route.post("/", "PaymentsController.create");
        Route.put("/", "PaymentsController.update");
        Route.delete("/:id", "PaymentsController.destory");
    }).prefix("/payments");

    Route.group(() => {
        Route.get("/:id", "RentalsController.getById");
        Route.get("/", "RentalsController.getAll");
        Route.post("/", "RentalsController.create");
        Route.put("/", "RentalsController.update");
        Route.delete("/:id", "RentalsController.destory");
    }).prefix("/rentals");

    Route.group(() => {
        Route.get("/:id", "StaffsController.getById");
        Route.get("/", "StaffsController.getAll");
        Route.post("/", "StaffsController.create");
        Route.put("/", "StaffsController.update");
        Route.delete("/:id", "StaffsController.destory");
    }).prefix("/staffs");

    Route.group(() => {
        Route.get("/:id", "StoresController.getById");
        Route.get("/", "StoresController.getAll");
        Route.post("/", "StoresController.create");
        Route.put("/", "StoresController.update");
        Route.delete("/:id", "StoresController.destory");
    }).prefix("/stores");
}).prefix("api")








