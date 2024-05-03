import { getTitle, getAutor } from './funciones.js'
import { curso } from './objetos.js'

// Se puede hacer asi:
// const { getTitle, getAutor } = require('./funciones')
// const { curso } =  require('./objetos')
const { nombre, autor }= curso

console.log(getTitle())
console.log(getAutor('Edwincito'))
console.log(nombre)
console.log(autor)