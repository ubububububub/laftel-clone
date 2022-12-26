export const Base64 = {
  encode(strToEncode: string) {
    return btoa(encodeURIComponent(strToEncode));
  },
};
