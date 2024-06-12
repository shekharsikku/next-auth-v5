import "next-auth";
import { UserRole } from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      role?: UserRole;
      isTwoFactorEnabled?: boolean;
      isOAuth?: boolean;
    } & DefaultSession["user"];
  }

  interface User {
    id?: string;
    role?: UserRole;
    isTwoFactorEnabled?: boolean;
    isOAuth?: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
    isTwoFactorEnabled?: boolean;
    isOAuth?: boolean;
  }
}
