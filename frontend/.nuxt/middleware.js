const middleware = {}

middleware['IsSeller'] = require('..\\middleware\\IsSeller.js')
middleware['IsSeller'] = middleware['IsSeller'].default || middleware['IsSeller']

middleware['IsUser'] = require('..\\middleware\\IsUser.js')
middleware['IsUser'] = middleware['IsUser'].default || middleware['IsUser']

export default middleware
