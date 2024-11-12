import { DefaultUser } from "next-auth";
import { User as UserType } from "./prisma/schema.prisma";
declare module "next-auth" {
  interface Session {
    user?: DefaultUser & UserType;
  }
  interface User extends DefaultUser {}
}
