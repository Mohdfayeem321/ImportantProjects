//===================== Importing Module and Packages =====================//

const AWS = require('aws-sdk')

//<<<===================== AWS Config =====================>>>//

AWS.config.update({
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    region: process.env.region
})

//<<<===================== This function is used for Generate AWS S3 Link of File =====================>>>//

let uploadFile = async (file) => {
    return new Promise(function (resolve, reject) {
        let s3 = new AWS.S3({ apiVersion: '2006-03-01' });

        var uploadParams = {
            ACL: "public-read",
            Bucket: "innovation-bucket",
            Key: "innovative/" + file.originalname,
            Body: file.buffer
        }


        s3.upload(uploadParams, function (err, data) {
            if (err) {
                return reject({ "error": err })
            }
            console.log("File Uploaded Succesfully")
            return resolve(data.Location)
        })
    })
}


//===================== Module Export =====================//

module.exports = uploadFile 