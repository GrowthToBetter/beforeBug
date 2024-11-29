import { Prisma } from "@prisma/client";

export type userWithLastLogin = Prisma.UserGetPayload<{
  include: { userAuth: { select: { last_login: true}}};
}>;
export type learnPayload = Prisma.LearnGetPayload<{select:{id:true, link: true, name:true}}>;

export type userFullPayload = Prisma.UserGetPayload<{
  include: {userAuth: true, File: {include: {TaskValidator: true}}, taskValidator:{include:{user:true}}, comment:{include:{file:true}}};
}>;
export interface MidtransRequestBody {
  gross_amount: number;
  first_name: string;
  last_name?: string;
  email: string;
  phone: string;
  user_id: string;
}

