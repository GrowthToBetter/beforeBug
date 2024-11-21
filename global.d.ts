/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient;

  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
    }
  }
  interface Window {
    gapi: any;
    google: any;
    snap: any;
  }
}


declare module 'react-docx';
declare module 'midtrans-client';
