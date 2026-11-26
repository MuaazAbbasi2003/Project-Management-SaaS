const generateVerificationUrl = (token) => {
  if (token === undefined || token === null) {
    throw new Error("The email token is undefined ");
  }
  if (typeof token !== "string") {
    throw new Error("The token type is incorrect");
  }
  if (token.length !== 64) {
    throw new Error(
      "The token is does not have the required length of 64 characters",
    );
  }
  if (!/^[a-f0-9]{64}$/i.test(token)) {
    throw new Error("Token must contain exactly 64 hexadecimal characters");
  }

  if (!process.env.FRONTEND_URL) {
    throw new Error("FRONTEND_URL environment variable is not configured");
  }
  const url = new URL(process.env.FRONTEND_URL);

  if (url.port !== "" || url.username !== "" || url.password !== "") {
    throw new Error("incorrect credentials used ");
  }

  if (url.protocol !== "https:" || url.hostname !== "projectflow.com") {
    throw new Error("Incorrect protocol or hostname detected ");
  }

  url.pathname = "/verify-email";
  url.searchParams.set("token", token);

  return url.toString();
};

export default generateVerificationUrl;
