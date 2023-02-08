//  const { getSpaceUntilMaxLength } = require("@testing-library/user-event/dist/utils");
const express = require("express");
const dotenv = require("dotenv")
const path = require("path");
const { getMaxListeners } = require("process");
const model = require("./model");
const registration = require("./registration.js")
const bcrypt = require('bcrypt');

require("./nav")
dotenv.config({ path: './config.env' })
app = express();
app.use(express.json());
app.use(require("./router/auth"))
const cregistration = require("./Cmodel")
require("./conne");
// app.use(cors());
//  const mode =require("./schema")
//  app.get("/", (req ,res )=>
// res.send("hellio register"));
app.get("/register", (req, res) => {
    res.send("hiii register")
});
app.get("/sregister", (req, res) =>
    res.send("hellio sregister"));
app.get("/slogin", (req, res) =>
    res.send("hellio slogin"));
app.get("/clogin", (req, res) =>
    res.send("hellio clogin"));
app.post("/cregister", async (req, res) => {
    const { cEmail, cpassword } = req.body;

    try {
        const creg = new cregistration({ cEmail, cpassword });
        await creg.save();
        console.log(req.body);
        res.status(200).send({ messaage: req.body });
    }
    catch (err) {
        console.log(err)

    }
})
app.post("/clogin", async (req, res) => {
    const { cEmail, cpassword } = req.body;
    // if (!cEmail ||!cpassword){
    //    return res.status(400).send("fill properly")
    // //    window.alert("pls")
    // }
    // else{
    try {
        const cuseremail = await cregistration.findOne({ cEmail: cEmail })
        // res.send("emailfound")
        if (!cuseremail) {
            console.log("baddddd")
            return res.status(404).send("invalid credentials")

        }
        else if (cuseremail.cpassword === cpassword) {
            console.log(cuseremail);
            res.json(cuseremail)


            // res.send("genuine")
        }
        else {
            return res.status(404).send("invalid user")
        }

    }
    catch (err) {
        console.log("error" + err)
    }
}
)
app.post("/register", async (req, res) => {
    const { name, Department, Branch, Sem, Roll, Room, Lt, Ld, Rd, Rt, Add, Pur } = req.body;

    try {

        let stdata = new model({ name, Department, Branch, Sem, Roll, Room, Lt, Ld, Rd, Rt, Add, Pur });
        const t = await stdata.save();
        console.log(req.body);
        res.status(200).send({ messaage: req.body });
        if (!t) {
            window.alert("fill correctly")
            res.status(400).send("fill correctly")
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err)
    }
});
app.post("/sregister", async (req, res) => {
    const { sname, sEmail, sRoll, spassword, scpassword } = req.body;
    if (spassword != scpassword) {
        res.status(404).send("passwords not matching");
    } else {
        try {
            const sreg = new registration({ sname, sEmail, sRoll, spassword, scpassword });
            if (!sname || !sEmail || !sRoll || !spassword || !scpassword) {
                res.status(404).send("required")
            }
            else {
                // const isMatch =await bcrypt.compare(cpassword , )
                await sreg.save();
                console.log(req.body);
                res.status(200).send({ messaage: req.body });
            }
        }
        catch (err) {
            console.log(err)

        }
    }
});
app.post("/slogin", async (req, res) => {
    const { sEmail, spassword } = req.body;
    try {
        const useremail = await registration.findOne({ sEmail: sEmail })
        // res.send("emailfound")
        if (!useremail) {
            console.log("baddddd")
            return res.status(404).send("invalid credentials")
        }
        else if (useremail.spassword === spassword) {
            console.log(useremail);
            res.json(useremail)
            // res.send("genuine")
        }
        else {
            res.status(404).send("invalid user")
        }

    }
    catch (err) {
        console.log("error" + err)
    }
})

app.post("/Permi", async (req, res) => {
    const { roll } = req.body
    try {
        // const roll=req.body 
        const userroll = await model.findOne({ Roll: roll });
        console.log(userroll)
        // res.json(userroll)
        if (!userroll) {

            console.log('badd');
            return res.status(404).send("user not exist")
        }
        else {
            res.json(userroll)
        };
    }
    catch (err) {
        res.send("error");
    }


}
);

app.get("/Permi", async (req, res) => {
    const aa = await model.find()
    res.json(aa)
    console.log(aa);
});





app.put("/Permi", async (req, res) => {
    const { roll } = req.body
    try {
        // const roll=req.body 

        const userrolll = await model.updateOne({ Roll: roll }, {
            $set: { Permitted: "Yes fully verified ,let him go" }
        })
        const userroll = await model.findOne({ Roll: roll });
        console.log(userroll)
        res.json(userroll)
     
    }
    catch (err) {
        res.send("error" + err);
    }
}
); app.put("/Per", async (req, res) => {
    const { roll } = req.body
    try {
       
        const userrolll = await model.updateOne({ Roll: roll }, {
            $set: { Allowed: "Yes allowed to go" }
        })
        const userroll = await model.findOne({ Roll: roll });
        console.log(userroll)
        res.json(userroll)
       
    }
    catch (err) {
        res.send("error" + err);
    }


}
);
app.put("/Ret", async (req, res) => {
    const { roll } = req.body
    try {
     

        const userrolll = await model.updateOne({ Roll: roll }, {
            $set: { return: "Yes (Gatepass Expired)" }
        })
        const userroll = await model.findOne({ Roll: roll });
        console.log(userroll)
        res.json(userroll)
        
    }
    catch (err) {
        res.send("error" + err);
    }


}
);
if ("production" == "production") {
   
 
    app.use(express.static(path.resolve(__dirname, "./client/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "./client/build", "index.html"))
    })
}


app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 8080;
var server = app.listen(port, function () {
    console.log('Node server is totally running...');
});
