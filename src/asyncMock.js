import imagen from "./assets/img.jpg"
const products = [
    {
        id: "1",
        name: "Café Expresso",
        price: 450,
        category: "Café",
        img: imagen,
        stock: 20,
        description: "descripción del café"
    },
    {
        id: "2",
        name: "Café Nespresso",
        price: 450,
        category: "Café",
        img: imagen,
        stock: 20,
        description: "descripción del café"
    },
    {
        id: "3",
        name: "Café sin nada",
        price: 450,
        category: "Café",
        img: imagen,
        stock: 20,
        description: "descripción del café"
    }

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category))
        }, 500)
    })
}