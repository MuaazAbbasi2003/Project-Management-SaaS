import generateVerificationUrl from "../utils/verification-url.js";

const testToken = "z".repeat(64);

console.log(generateVerificationUrl(testToken));
