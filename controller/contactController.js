const asyncHandler=require("express-async-handler")
const Contact=require("../models/contactModel")

//@desp Get all Contacts
//@route GET /api/contacts
// access private

const getContact=asyncHandler(async(req,res)=>{

    const contacts=await Contact.find({user_id:req.user.id})
    res.status(200).json(contacts)
})


//@desp Create Contact
//@route POST /api/contacts
// access private
const createContact = asyncHandler(async (req, res) => {
    console.log("The Request Body is", req.body);
    const { name, email, phone } = req.body;
    if (!name || !phone || !email) {
        res.status(400);
        throw new Error("All Fields are mandatory");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id:req.user.id
    });
    res.status(201).json(contact);
});



//@desp Get a Contact
//@route GET /api/contacts:id
// access private
const accessContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact Not Found")
    }

    res.status(200).json(contact)
}
)

//@desp Update a Contacts
//@route PUT /api/contacts:id
// access private
const updateContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact Not Found")
    }

    if(contact.user_id.toString()!==req.user.id){
        res.status(401);
        throw new Error("User Dont Have permission to update the contact")
    }
    const updateContact=await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )

    res.status(200).json(updateContact)
}
)

//@desp Delete a Contacts
//@route DELETE /api/contacts:id
// access private
const delContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact Not Found");
    }
    if(contact.user_id.toString()!==req.user.id){
        res.status(401);
        throw new Error("User Dont Have permission to Delete the contact")
    }
    await contact.deleteOne();
    res.status(200).json({ message: "Contact deleted successfully" });
});




module.exports={getContact,createContact,accessContact,delContact,updateContact}