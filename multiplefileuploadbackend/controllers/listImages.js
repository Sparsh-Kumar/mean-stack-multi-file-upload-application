

const path = require ('path');
const { Image } = require (path.resolve (__dirname, '..', 'Databases', 'Models', 'Images'));

const listImages = async (req, res) => {
    
    try {

        const imagesData = await Image.find ({}).lean ();
        return res.status (200).send ({
            status: 'success',
            imagesData
        })

    } catch (error) {
        return res.status (401).send ({
            status: 'failure',
            message: error.message
        })
    }

}

module.exports = {
    listImages
}