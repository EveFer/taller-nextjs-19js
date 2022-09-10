import DB from '../../../database/db'

// /api/products
const allProducts = async (request, response) => {
    const db = new DB() // instancia

    const allProducts = await db.getAll()

    response.status(200).json({
        success: true,
        data: allProducts
    })
}

export default allProducts