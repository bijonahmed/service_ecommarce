const middleware = {}

middleware['samesite'] = require('..\\middleware\\samesite.js')
middleware['samesite'] = middleware['samesite'].default || middleware['samesite']

export default middleware
