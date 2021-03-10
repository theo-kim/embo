import { NextFunction, Request, Response, Router } from 'express';

import { client, ClientResourceType } from '../../config';

const router = Router();

router.get("/", (req : Request, res : Response) => {
    console.log(client.resolveResource(ClientResourceType.HTML, "index"));
    res.sendFile(client.resolveResource(ClientResourceType.HTML, "index"));
});

// stylesheets
router.get("/:stylesheet.css", (req : Request, res : Response, next : NextFunction) => {
    const path = client.resolveResource(ClientResourceType.CSS, req.params.stylesheet);
    if (path == null) {
        next("404");
    }
    else {
        res.sendFile(path);
    }
});

router.get("/:img.png", (req : Request, res : Response, next : NextFunction) => {
    const path = client.resolveResource(ClientResourceType.PNG, req.params.img);
    if (path == null) {
        next("404");
    }
    else {
        res.sendFile(path);
    }
});

// javascript
router.get("/driver.js", (req : Request, res : Response, next : NextFunction) => {
    const path = client.resolveSource("source");
    res.sendFile(path);
});

export default router;
