import { Router, Request, Response, NextFunction } from "express";
import { resolve } from "path";
import fs from "fs";

import { STREAMER_DATA } from "../../data";
import { INDEX_FILE } from "../../constants";

import checkStreamer from "./checkStreamer";

const router = Router({mergeParams: true});
const basePath = resolve(".");

const rootHandler = (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json(STREAMER_DATA);
}

const listHandler = (req: Request, res: Response, next: NextFunction) => {
  const streamer = req.params.streamer;
  // const requestedURL = `${req.protocol}://${req.get("Host")}${req.originalUrl}`;
  const requestedURL = `${req.secure ? "https" : "http"}://${req.get("Host")}`;
  const jsonPath = resolve(`./images/${streamer}/${INDEX_FILE}`);

  if(!fs.existsSync(jsonPath))
  {
    return res.status(404).json({
      status: false,
      message: `server has not downloaded any data from ${streamer}`
    });
  }

  try 
  {
    const data = fs.readFileSync(jsonPath, "utf8");
    const regexp = new RegExp(basePath, "g");
    const uriReplacedData = data.replace(regexp, requestedURL);
    return res.status(200).json(JSON.parse(uriReplacedData));
  }
  catch(err)
  {
    return res.status(404).json({
      status: false,
      message: `${err}`
    });
  }
}

router.get("/", rootHandler);
router.get("/:streamer", checkStreamer, listHandler);

export default router;