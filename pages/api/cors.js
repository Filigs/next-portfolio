import Cors from "cors";

const cors = Cors({
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  origin: (origin, callback) => {
    // allow any origin or handle a specific origin
    if (!origin || origin === "null") {
      callback(null, true);
    } else {
      callback(null, true);
    }
  },
  credentials: true,
});

export function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export { cors };
