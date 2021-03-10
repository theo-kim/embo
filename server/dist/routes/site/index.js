"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const config_1 = require("../../config");
const router = express_1.Router();
router.get("/", (req, res) => {
    console.log(config_1.client.resolveResource(config_1.ClientResourceType.HTML, "index"));
    res.sendFile(config_1.client.resolveResource(config_1.ClientResourceType.HTML, "index"));
});
// stylesheets
router.get("/:stylesheet.css", (req, res, next) => {
    const path = config_1.client.resolveResource(config_1.ClientResourceType.CSS, req.params.stylesheet);
    if (path == null) {
        next("404");
    }
    else {
        res.sendFile(path);
    }
});
router.get("/:img.png", (req, res, next) => {
    const path = config_1.client.resolveResource(config_1.ClientResourceType.PNG, req.params.img);
    if (path == null) {
        next("404");
    }
    else {
        res.sendFile(path);
    }
});
// javascript
router.get("/driver.js", (req, res, next) => {
    const path = config_1.client.resolveSource("source");
    res.sendFile(path);
});
exports.default = router;
//# sourceMappingURL=index.js.map