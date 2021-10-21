
const multer = require ('multer');
const S3 = require ('aws-sdk/clients/s3');
const multerS3 = require ('multer-s3');
const path = require ('path');
const nanoId = require ('nanoid');

const s3Config = new S3 ({

    region: process.env.AWS_BUCKET_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY

})

const multerS3Config = multerS3 ({
    s3: s3Config,
    bucket: process.env.AWS_BUCKET_NAME,
    acl:'public-read',
    metadata: (req, file, callback) => {
        callback (null, { fieldName: file.fieldname });
    },
    key: (req, file, callback) => {
        callback (null, `${nanoId.nanoid ()}-${file.originalname}`);
    }
})


const upload = multer ({
    storage: multerS3Config,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: (req, file, callback) => {
        if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
            callback (null, true);
        } else {
            callback (null, false);
            return callback (new Error ('Only .png, .jpg and .jpeg image formats are allowed'));
        }
    }
});

module.exports = {
    upload
}