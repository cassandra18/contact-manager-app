const express = require('express');
const router = express.Router();
const { getContacts, getContact, createContact, deleteContact, updateContact } = require('../Controllers/contactControllers');
const validateToken = require('../middleware/validateTokenHandler');

router.route("/").get(getContacts).post(createContact);
router.route("/:id").put(updateContact).get(getContact).delete(deleteContact);
router.use(validateToken);
module.exports = router;
