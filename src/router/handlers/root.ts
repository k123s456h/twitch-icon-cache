import { Request, Response, NextFunction } from "express";

const handler = (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    "/list": "Show supported streamers with origin icon list url",
    "/list/:streamer": "Show streamers icon list",
    "/images/:streamer/:filename": "Get icon image",
  });
}

export default handler;