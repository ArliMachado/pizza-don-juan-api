'use strict'
const Route = use('Route')

Route.post('users', 'UserController.store').validator('User')
Route.post('sessions', 'SessionController.store').validator('Auth')

Route.post('files', 'FileController.store')
Route.get('files/:id', 'FileController.show')

Route.post('products', 'ProductController.store')
Route.get('products', 'ProductController.index')
