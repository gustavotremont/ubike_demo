const { Product } = require('../models')
const { Op } = require("sequelize");

// app.post('/products', async(req, res) => {
//     const { providerUuid, name, price, rating } = req.body

//     try {
//         const provider = await Provider.findOne({ where: {uuid: providerUuid} })

//         const product = await Product.create({ name, price, rating, providerId: provider.id })
//         return res.status(200).json(product)
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json(error)
//     }
// })

const getProducts = async (req, res) => {
    try {
        const search = req.query.search
        
        if(search){
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
            
            return res.status(200).json({status: 'success', products})

        }else{
            const products = await Product.findAll({ 
                attributes: { 
                    exclude: ['createdAt', 'updatedAt', 'type', 'description'] 
                },
                include: { 
                    association: 'provider',
                    attributes: ['name']
                }  
            })
            return res.status(200).json({status: 'success', products})

        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({status: 'error', error: err})
    }
}

const getProductByUUID = async (req, res) => {
    const uuid = req.params.uuid
    try {
        const product = await Product.findOne({ 
                where: { uuid }, 
                attributes: { exclude: ['createdAt', 'updatedAt'] },
                include: { 
                    association: 'provider',
                    attributes: { exclude: ['createdAt', 'updatedAt'] }
                } 
        })
        return res.status(200).json({status: 'success', product})
    } catch (err) {
        console.log(err);
        return res.status(500).json({status: 'error', error: err})
    }
}

const products = {
    getProducts,
    getProductByUUID
}

module.exports = products