const login = async(req,res) => {
    const data = req.body
    return res.status(200).json({message:"khdam"})
}

module.exports =  { login }