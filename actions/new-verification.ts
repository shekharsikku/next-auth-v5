"use server";

import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verification-token";

const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);

  if (!existingToken) {
    return { error: "Token does not exists!" };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: "Token has expired!" };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: "Email does not exists!" };
  }

  const updateResponse = await db.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });
  if (updateResponse.emailVerified) {
    const deletedToken = await db.verificationToken.delete({
      where: { id: existingToken.id },
    });

    if (deletedToken.email === updateResponse.email) {
      return { success: "Email verified successfully!" };
    }
  }

  return { error: "Cannot verify email!" };
};

export { newVerification };
