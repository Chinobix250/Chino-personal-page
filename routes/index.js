const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.render("index.ejs")
})

router.get("/music_scores", (req, res) => {
    res.render("music_scores")
})

router.get("/programming", (req, res) => {
    res.render("programming")
})

router.get("/art", (req, res) => {
    res.render("art")
})

router.get("/misc", (req, res) => {
    res.render("misc")
})

module.exports = router