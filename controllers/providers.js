const { Provider } = require('../models')
// const { Op } = require("sequelize");

// const createProvider = async (req, res) => {
//     const { name, cif, address } = req.body
//     let errors = []

//     if( !name || !cif || !address ) errors.push('Todos los campos deben estar llenos')
//     if(/^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/.test(cif)) errors.push('El CIF debe tener un formato valido')

//     if(errors.length > 0) {
//         return res.status(400).json({ status: 'error', errors })
//     }else{
//         try {
//             const providerExist = await Provider.findOne({ 
//                 where: {
//                     [Op.or]: [
//                         {name},
//                         {cif},
//                         {address}
//                     ]
//                 }
//             })

//             if(providerExist) {
//                 let error = ''

//                 if(providerExist.name === name) error = 'El nombre de este proveedor ya esta registrado, intente con otro.'
//                 if(providerExist.cif === cif) error = 'El CIF de este proveedor ya esta registrado, intente con otro.'
//                 if(providerExist.address === address) error = 'La Dirección de este proveedor ya esta registrado, intente con otro.'

//                 return res.status(400).json({ status: 'error', error })
//             } else {
//                 const provider = Provider.create({ name, cif, address })
//                 return res.status(200).json(provider)
//             }
//         } catch (err) {
//             console.log(err);
//             return res.status(500).json({ status: 'error', err })
//         }
//     }
// }

const getProviders = async (req, res) => {
    try {
        const providers = await Provider.findAll({ attributes: { exclude: ['createdAt', 'updatedAt'] } })
        return res.status(200).json(providers)  
    } catch (err) {
        console.log(err);
        return res.status(500).json(err)
    }
}

const getProviderByUUID = async (req, res) => {
    const uuid = req.params.uuid
    try {
        const provider = await Provider.findOne({ 
                where: { uuid }, 
                attributes: { exclude: ['createdAt', 'updatedAt'] },
                include: { 
                    association: 'products',
                    attributes: { exclude: ['description', 'createdAt', 'updatedAt'] }
                } 
        })
        return res.status(200).json(provider)
    } catch (err) {
        console.log(err);
        return res.status(500).json(err)
    }
}

// const updateProvider = async (req, res) => {
//     const uuid = req.params.uuid;
//     const { name, cif, address } = req.body;

//     let errors = []

//     if( !name || !cif || !address ) errors.push('Todos los campos deben estar llenos')
//     if(/^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/.test(cif)) errors.push('El CIF debe tener un formato valido')

//     if(errors.length > 0) {
//         return res.status(400).json({ status: 'error', errors })
//     }else{
//         try {
//             const provider = await Provider.findOne({ where: { uuid } });

//             if(provider) {
//                 provider.name = name;
//                 provider.cif = cif;
//                 provider.address = address;
        
//                 await provider.save()
//                 return res.status(200).json(provider);
//             }else {
//                 return res.status(200).json({ status: 'error', error: 'Este Proveedor no ha sido encontrado' }); 
//             }  
//         } catch (err) {
//             console.log(err);
//             return res.status(500).json(err);
//         }
//     }

// }

// const deleteProvider = async (req, res) => {
//     const uuid = req.params.uuid;

//     try {
//         const provider = await Provider.findOne({ where: { uuid } });
//         await provider.destroy();
//         return res.status(200).json({msg: 'this provider was remove', provider});
//     } catch (err) {
//         console.log(err);
//         return res.status(500).json(err);
//     }
// }

const providers = {
    getProviders,
    getProviderByUUID
}

module.exports = providers