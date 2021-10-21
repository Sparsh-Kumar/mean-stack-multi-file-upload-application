

const path = require ('path');
const { Image } = require (path.resolve (__dirname, '..', 'Databases', 'Models', 'Images'));

const uploadMultiple = async (req, res) => {

    try {

        let ImagesData = req.files.map ((file) => {
            if (file) {
                return {
                    originalName: file.originalname,
                    encoding: file.encoding,
                    size: file.size,
                    key: file.key,
                    bucket: file.bucket,
                    location: file.location,
                    etag: file.etag,
                    versionId: file.versionId
                }
            }
        });

        const insertedDocs = await Image.insertMany (ImagesData);
        return res.status (200).send ({
            status: 'success',
            insertedDocs
        })

    } catch (error) {
        return res.status (401).send ({
            status: 'failure',
            message: error.message
        })
    }

}

module.exports = {
    uploadMultiple
}