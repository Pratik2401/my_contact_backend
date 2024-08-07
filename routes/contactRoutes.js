    const express=require("express")
    const router=express.Router()
    const {getContact, createContact, accessContact, updateContact, delContact}=require("../controller/contactController")
    const validateToken = require("../middleware/validateToken")

    router.use(validateToken)

    router.route("/").get(getContact)

    router.route("/").post(createContact)

    router.route("/:id").get(accessContact)

    router.route("/:id").put(updateContact)

    router.route("/:id").delete(delContact)

    module.exports=router