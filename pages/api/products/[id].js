import DB from '../../../database/db'

// api/products/:id
const getById = async (request, response) => {
    const db = new DB()
    const id = request.query.id

    const product = await db.getById(id)

    response.status(200).json({
        success: true,
        data: product
    })
}

export default getById