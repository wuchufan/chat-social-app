const { s3 } = require('../config/aws');
const sharp = require('sharp')

exports.uploadAvatar = async (req, res, next) =>{

  try{
  const avatar = req.file;
  const body = await sharp(avatar.buffer)
  .resize({
    width:200,
    height:200
  })
  .toBuffer()


  const key = `avatar_${avatar.originalname}`;
  const params = {
    Bucket: process.env.S3_BUCKET,
    Key:key,
    Body: body,
    ContentType: avatar.mimetype,
    ACL: 'public-read'
  };

  const uploadPromise = new Promise ((resolve, reject)=>{
    s3.upload(params, (err, data) => {
      if(err){
        reject(err);
      } else{
        resolve(data)
      }
    });
  })

  const data = await uploadPromise;
  req.avatar = data;
  next();
  } catch(err){

    console.log(err);
    res.status(500).json({msg:'failed to upload avatar'})
  }
}
