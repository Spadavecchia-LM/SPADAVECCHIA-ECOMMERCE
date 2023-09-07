const getProductos = new Promise((resolve, reject) => {
    const productos = [
        {
            id: 1,
            title: "fox motocross jersey",
            description: "unisex short sleeves shirt",
            price: 500,
            imageUrl: "https://foxracing.ar/media/2022/02/25768-001-2-scaled-768x768.webp",
            category: 2,
            stock: 2,
            initial: 1
        },
        {
            id: 2,
            title: "fox pant",
            description: "fox pant legacy edition",
            price: 750,
            imageUrl: "https://foxracing.ar/media/2021/11/D_669799-MLA45757019164_042021-O-768x768.webp",
            category: 2,
            stock: 5,
            initial: 1
        },
        {
            id: 3,
            title: "fox kawasaki jacket",
            description: "fox kawasaki jacket",
            price: 1200,
            imageUrl: "https://foxracing.ar/media/2023/05/28999-203-1-768x768.webp",
            category: 2,
            stock: 10,
            initial: 1
        },
        {
            id: 4,
            title: "Dunlop cross tire",
            description: "2023 dunlop tire",
            price: 800,
            imageUrl: "https://glasscom.com.ar/landings/img/neumaticos.png",
            category: 1,
            stock: 5,
            initial: 1
        },
        {
            id: 5,
            title: "akrapovic exhaust system",
            description: "akrapovic full system exhaust",
            price: 4500,
            imageUrl: "https://palermobikes.com.ar/5899-home_default/slip-on-akrapovic-husqvarna-fc-fx-250-450-19-22.jpg",
            category: 1,
            stock: 10,
            initial: 1
        },
        {
            id: 6,
            title: "fox helmet v1",
            description: "2023 fox v1 helmet",
            price: 2500,
            imageUrl: "https://foxracing.ar/media/2022/06/27740-255-1-scaled-768x768.jpg",
            category: 2,
            stock: 15,
            initial: 1
        }
    ]

    if (productos.length === 0) {
        reject("error, no hay items disponibles")
    } else {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    }
})

export default getProductos