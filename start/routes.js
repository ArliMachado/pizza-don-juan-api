'use strict'
const Route = use('Route')

Route.post('users', 'UserController.store').validator('User')
Route.post('sessions', 'SessionController.store').validator('Auth')

Route.get('files/:id', 'FileController.show')

Route.group(() => {
  Route.post('files', 'FileController.store')

  Route.post('products', 'ProductController.store')
  Route.get('products', 'ProductController.index')

  Route.get('orders', 'OrderController.index')
  Route.get('orders/getByUser', 'OrderController.getByUser')
  Route.post('orders', 'OrderController.store')

  Route.resource('product.types', 'ProductTypeController')
  Route.resource('product.types.sizes', 'ProductSizeController')
}).middleware(['auth'])
