const bcrypt = require("bcrypt");
const router = require("express").Router();
const { User, validate } = require("../model/user");

router.post("/", async (req, res) => {
    try {
        const {error}=validate(req.body);

        if(error)
            return res.status(400).send({message:error.details[0].message})

        const user=await User.findOne({email:req.body.email})

        if(user)
            return res.status(409).send({message:"This email have been already used. Naya banau"})

        const salt=await bcrypt.genSalt(Number(provess.env.SALT));

        const hashPassword=await bcryptp.hash(req.body.password,salt);
        await new user({...req.body,password:hashPassword}).save();
        
    } catch (e) {
        console.log(e);
        res.status(500).send({message:"Server Error"});
        console.warn("Error ")
        
    }
});

module.exports = router;
