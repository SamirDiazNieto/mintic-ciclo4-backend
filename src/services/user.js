const User = require('../models/user')

createUser = async (user) => {
    let userInstance = new User(user)
    user = await userInstance.save()
    return user
}

getUsers = async () => {
    let user = await User.find({}).populate("projects")
    return user
}

getUserById = async(userId) =>{
    let user = await User.findById(userId).populate("projects")
    return user
}

updateUser = async (userId, user)=>{
    let new_user = User.findByIdAndUpdate(userId, user,{new:true})
    return new_user
}
UpdateUserInsc = async(userId, projectId)=>{
    let user = await User.findByIdAndUpdate(userId,{
        $push:{
            projects:projectId
        }
    })
    return user
}
UpdateProject = async(userId, projectId)=>{
    let user = await User.findByIdAndUpdate(userId,{
        $push:{
            projects:projectId
        }
    })
    return user
}
deleteUser= async(userId)=>{
    await User.findByIdAndDelete(userId,{
        function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Deleted : ", docs);
            }
        }
    }
        )
}
getUserByEmail = async(Email) =>{
    console.log(Email)
    let user = await User.findOne({email:Email}).populate("projects")
    console.log(user)
    return user
}
module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    UpdateProject,
    deleteUser,
    getUserByEmail
}