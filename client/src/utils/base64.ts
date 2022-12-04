export const Base64 = {
  encode(strToEncode: string) {
    return btoa(encodeURIComponent(strToEncode));
    // return Buffer.from(strToEncode, "utf8").toString("base64");
  },
};
