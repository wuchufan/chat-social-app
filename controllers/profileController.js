
const Profile = require('../models/Profile');


exports.getUserProfile = async (req,res) =>{
  try{

    let profile = await Profile.findOne({user:req.user.id});
    if(!profile) return res.status(400).json({msg:'no profile is found'});
    // console.log(profile);
    res.json(profile)

  } catch(error){
    console.log(error);
    res.status(500).json({msg:'Server error'});
  }
}


exports.createOrUpdateUserProfile = async (req,res) =>{
  const {
    age,
    school,
    major,
    github,
    facebook
  } = req.body;

  const profileData= {}
  profileData.user = req.user.id;
  if(age) profileData.age = age;
  profileData.education = {}
  if(school) profileData.education.school = school;
  if(major) profileData.education.major = major;
  profileData.social = {}
  if(github) profileData.social.github = github;
  if(facebook) profileData.social.facebook = facebook;
  try{
    let profile = await Profile.findOne({user:req.user.id});
    if(profile){
      // console.log(profileData);
      profile = await Profile.findOneAndUpdate(
        {user:req.user.id},
        {$set:profileData},
        {new:true}
      );
      return res.json(profile);
    }

    profile = new Profile(profileData);
    await profile.save();
    return res.json(profile);


  } catch(error){
    console.log(err);
    res.status(500).json({msg:'Server error'})
  }

}