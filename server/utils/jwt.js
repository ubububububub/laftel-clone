import jsonwebtoken from "jsonwebtoken";
import "dotenv/config";

const secretKey = process.env.JWT_KEY;

class Jwt {
  create(payload, exp) {
    return new Promise((res, rej) => {
      jsonwebtoken.sign(
        payload,
        secretKey,
        {
          algorithm: "HS256",
          expiresIn: exp,
          issuer: "laftel",
        },
        (err, token) => {
          if (err) rej(err);
          else res(token);
        }
      );
    });
  }
}

const jwt = new Jwt();

export default jwt;
