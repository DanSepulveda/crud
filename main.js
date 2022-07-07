let productos = []

let telefono = {
    id: 1,
    nombre: 'Iphone X - Apple',
    precio: 50000,
    descripcion: 'Telefono con 128GB y cámara de 32megas.',
    colores: ['blanco', 'rojo', 'negro'],
    marca: 'apple'
    // accesorios: {
    //     cargador: true,
    //     cable: false,
    //     audifonos: false,
    //     carcasa: true
    // },
}

const addProduct = (id,nombre, precio, descripcion) => {
    let producto = {
        id: id,
        nombre: nombre,
        precio: precio,
        descripcion: descripcion
    }
    // verificar si ya existe en el array "productos" un elemento con el mismo id

    productos.push(producto)

    return productos
}

addProduct(1,'Galaxy S20', 500000, 'Telefono muy bueno')
addProduct(2,'Galaxy S21', 40000, 'Telefono muy malo')
addProduct(3,'Galaxy S21 plus', 500000, 'Telefono  bueno')
addProduct(4,'Galaxy Ace', 500000, 'Telefono malo')
addProduct(5,'Galaxy', 600000, ' muy bueno')


const getAllProducts = () => {
    console.log(productos)
}

const getProductById = (id) => {
    // modificar el método find. Que haga lo mismo, pero sin tener que ocupar el if
    let elementoBuscado = productos.find((producto)=>{
        if(producto.id===id){
            return producto
        }
    })

    return elementoBuscado
}


const getProductsByName = (nombre) => {
    // Este método puede ser escrito en una línea, sin usar if
    return productos.filter((producto)=>{
        if(producto.nombre.includes(nombre)){
            return producto
        }
        // if(producto.nombre.toLowerCase().includes(nombre.toLowerCase())){
        //     return producto
        // }
    })
}

const getProductsByColor = () => {
    //tarea
}


const deleteProduct = (parametros) => {
    //código
}

const editProduct = (parametros) => {
    //código
}
