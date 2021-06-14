import models from '../models/index';

export async function createPublication(req, res) {
    try {
        const { id, tittle, createdAt, updatedAt, shortDescription, longDescription, ubication, price, stock, postalCode, latitudLongitud, image } = req.body;
        let newPublication = await models.Publications.create({
            tittle,
            createdAt,
            updatedAt,
            shortDescription,
            longDescription,
            ubication,
            price,
            stock,
            postalCode,
            latitudLongitud,
            image
        }, {
            fields: ["tittle", "createdAt", "updatedAt", "shortDescription", "longDescription", "ubication", "price", "stock", "postalCode", "latitudLongitud", "image"]
        });
        if (newPublication) {
            return res.json({
                mensaje: "Publicacion creado satisfactoriamente",
                data: newPublication
            })
        }
    } catch (error) {
        console.log('algo salio mal:  ', error.message);
    }
}

export async function getPublications(req, res) {
    try {
        const publications = await models.Publications.findAll();
        return res.json({
            data: publications
        })
    } catch (error) {
        console.log('algo salio mal:  ', error.message);
    }
}

export async function getOnePublication(req, res) {
    try {
        const id = req.params.id;
        const publications = await models.Publications.findOne({
            where: { id }
        })
        return res.json(publications)
    } catch (error) {
        console.log('algo salio mal:  ', error.message);
    }
}
export async function deletePublication(req, res) {
    try {
        const { id } = req.params;
        const deleteCount = await models.Publications.destroy({
            where: { id }
        })
        return res.json({
            mensaje: "proyecto eliminado",
            count: deleteCount
        })
    } catch (error) {
        console.log('algo salio mal:  ', error.message);
    }
}
export async function updatePublication(req, res) {
    try {
        const id = req.params.id;
        const { tittle, createdAt, updateAt, shortDescription, longDescription, ubication, price, stock, postalCode, latitudLongitud, image } = req.body;
        const publications = await models.Publications.findAll({
            atributes: ["tittle", "createdAt", "updateAt", "shortDescription", "longDescription", "ubication", "price", "stock", "postalCode", "latitudLongitud", "image"],
            where: { id }
        });
        if (publications.length > 0) {
            publications.map(async p => {
                await p.update({
                    tittle,
                    createdAt,
                    updateAt,
                    shortDescription,
                    longDescription,
                    ubication,
                    price,
                    stock,
                    postalCode,
                    latitudLongitud,
                    image
                })
            })
        }
        return res.json({
            mensaje: "Publication update",
            data: publications
        })
    } catch (error) {
        console.log('algo salio mal:  ', error.message);
    }
}