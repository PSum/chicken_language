const express = require('express');
const router = express.Router();


router.post('/translate_chicken', async (req, res) => {
    try {
        let { text } = req.body;
        text = text.toLowerCase()
        var chicken_text = "";
        for (var i = 0; i < text.length; i++){
            switch (text[i]) {
                case "a":
                    chicken_text += "ahadefa";
                    break;
                case "e":
                    chicken_text += "ehedefe";
                    break;
                case "i":
                    chicken_text += "ihidefi";
                    break;
                case "o":
                    chicken_text += "ohodefo";
                    break;
                case "u":
                    chicken_text += "uhudefu";
                    break;
                case "ä":
                    chicken_text += "ähädefä";
                    break;
                default:
                    chicken_text += text[i];
            }
    }
        chicken_text = chicken_text.replace("ahadefauhudefu", "auhaudefau")
        chicken_text = chicken_text.replace("ihidefiehedefe", "iehiedefie")
        chicken_text = chicken_text.replace("ehedefeuhudefu", "euheudefeu")
        chicken_text = chicken_text.replace("ehedefeihidefi", "eiheidefei")
        chicken_text = String(chicken_text).charAt(0).toUpperCase() + String(chicken_text).slice(1);
        res.send(chicken_text)

  } catch (err) {
    console.log(err);
    res.status(500).send('There has been an error' + err)
  }
})

module.exports = router;