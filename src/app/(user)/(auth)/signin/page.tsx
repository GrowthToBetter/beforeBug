/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import useSWR from "swr";
import { fetcher } from "@/utils/server-action/Fetcher";
import { userWithLastLogin } from "@/utils/relationsip";

export default function Signin() {
  const router = useRouter();
  const [userData, setUserData] = useState<userWithLastLogin | null>(null);
  const { data: session, status } = useSession();
  const [loading, setIsLoading] = useState(false);
  const [register, setRegister] = useState(false);

  const { data, error } = useSWR(
    session ? `https://be-before-bug.vercel.app/api/users/${session?.user?.id}` : null,
    fetcher,
    {
      refreshInterval: 1000,
    }
  );
  useEffect(() => {
    if (data) {
      setUserData(data);
    }
  }, [data]);
  console.log(userData);
  useEffect(() => {
    if (session && userData) {
      toast.success("Berhasil Login!");
      router.push("/");
    }
  }, [session, userData, router]);

  const handleLogin = async () => {
    setIsLoading(true);
    await signIn("google");
  };

  return (
    <React.Fragment>
      <main className="min-h-screen-minus-10">
        <div className="flex max-w-full w-full h-screen items-center justify-center relative">
          <div className="lg:w-1/2 w-full h-screen pt-24 px-4 lg:px-0 flex items-center flex-col justify-center bg-Primary">
            <div className="max-w-lg mx-auto mt-2 border-2 border-double border-Secondary rounded-lg p-10 bg-white">
              <div className="container shadow-inner border-2 mb-10 py-5 rounded-md">
                <h3 className="text-[35.4px] font-medium text-center text-black leading-none m-3">
                  Welcome to Before Bug
                </h3>
                <p className="text-[20px] font-medium text-black text-center opacity-70 lg:-mt-2">
                  Make your programming journey easier
                </p>
              </div>

              {loading ? (
                <button className="focus:outline-none text-white bg-base flex justify-center items-center hover:bg-Secondary focus:ring focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-3 me-2 mb-2 mt-6 w-full">
                  <div className="flex gap-x-3 items-center">
                    <svg
                      aria-hidden="true"
                      className="inline w-5 h-5 animate-spin text-Secondary fill-white"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span>Loading...</span>
                  </div>
                </button>
              ) : (
                <div className="flex flex-col justify-center items-center">
                  <button
                    onClick={handleLogin}
                    type="button"
                    className="focus:outline-none text-black bg-base border-2 border-black flex justify-center items-center hover:bg-blue-800 hover:text-white focus:ring focus:ring-blue-400 font-medium rounded-lg text-sm px-5 py-3 me-2 mb-2 mt-6 w-full">
                    {/* google */}
                    <p className="font-medium ">Continue with Google</p>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
