const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const ListingController = require("../controller/listings.js");
const multer = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});


router.route("/")
.get(wrapAsync(ListingController.index))
.post(isLoggedIn, upload.single('listing[image]'), wrapAsync(ListingController.createListing));
// .post( upload.single('listing[image]') ,(req, res) => {
//     res.send(req.file);
// });

//new route
router.get("/new", isLoggedIn, ListingController.renderNewForm);


router.route("/:id")
.get(wrapAsync(ListingController.showListing))
.put(isLoggedIn, isOwner, upload.single('listing[image]'), validateListing, wrapAsync(ListingController.updateListing))
.delete(isLoggedIn, isOwner, wrapAsync(ListingController.destroyListing));




//Index route
// router.get("/", wrapAsync(ListingController.index));

//show route
// router.get("/:id", wrapAsync(ListingController.showListing));

//create route
// router.post("/", isLoggedIn, validateListing, wrapAsync(ListingController.createListing));

//edit route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(ListingController.editForm));

//update route
// router.put("/:id", isLoggedIn, isOwner, validateListing, wrapAsync(ListingController.updateListing));

//delete route
// router.delete("/:id", isLoggedIn, isOwner, wrapAsync(ListingController.destroyListing));

module.exports = router;