const { Product } = require('../models')
const { Op } = require("sequelize");

const getProductsBySearch = async (search) => {
    const searchElements = search.split(' ').map(element => `%${element}%`)

    const products = await Product.findAll({ 
        where: {
            [Op.or]: {
                name: {
                    [Op.iLike]: { [Op.any]: searchElements }
                },
                '$provider.name$': {
                    [Op.iLike]: { [Op.any]: searchElements }
                } 
            }
        },
        attributes: { 
            exclude: ['createdAt', 'updatedAt', 'type', 'description'] 
        },
        include: { 
            association: 'provider',
            attributes: ['name']
        }  
    })

    return products
}

const getProductByUUID = async (uuid) => {
    const product = await Product.findOne({ 
        where: { uuid }, 
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: { 
            association: 'provider',
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        } 
    })

    return product
}

const getAllProducts = async () => {
    const products = await Product.findAll({ 
        attributes: { 
            exclude: ['createdAt', 'updatedAt', 'type', 'description'] 
        },
        include: { 
            association: 'provider',
            attributes: ['name']
        }  
    })

    return products

}

const getProducts = async (req, res) => {
    try {
        const { search, uuid } = req.query
        
        if(search){
            const products = await getProductsBySearch(search)
            return res.status(200).json({status: 'success', products})

        }else if(uuid){
            const product = await getProductByUUID(uuid)
            return res.status(200).json({status: 'success', product})

        }else{
            const products = await getAllProducts()
            return res.status(200).json({status: 'success', products})

        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({status: 'error', error: err})
    }
}

const products = {
    getProducts
}

module.exports = products