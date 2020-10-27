const aws = require('aws-sdk');

exports.s3 = new aws.S3({region: process.env.AWS_REGION, accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY});;
