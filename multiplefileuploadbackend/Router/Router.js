

const Router = require ('express').Router ();
const path = require ('path');
const { uploadMultiple } = require (path.resolve (__dirname, '..', 'controllers', 'uploadMultiple'));
const { listImages } = require (path.resolve (__dirname, '..', 'controllers', 'listImages'));
const { upload } = require (path.resolve (__dirname, '..', 'multerConfig', 'multerConfig'));

Router.post ('/upload-files', upload.array ('files'), uploadMultiple);
Router.get ('/list-images', listImages);

module.exports = {
    Router
}