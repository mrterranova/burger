var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js"); 

router.get("/", (req, res) => {
    burger.all(data => {
        var hbsObj = {
            burger: data
        };
        console.log(hbsObj);
        res.render("index", hbsObj);
    });
});

router.post("/api/burger", (req,res)=> {
    burger.create([
        "burger_name", "devoured"
    ], [req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insterId});
    });
});

router.put("/api/burger/:id", (req, res)=> {
    var condition = "id = " + req.params.id;

    console.log("condition", condition); 

    burger.update({
        devoured: req.body.devoured
    }, condition, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burger/:id", (req, res) => {
    var condition = "id = "+ req.params.id;

    burger.delete(condition, result => {
        console.log(result.affectedRows)
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
