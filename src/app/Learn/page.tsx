/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { learnPayload } from "@/utils/relationsip";
import Accordion from "./_components/Accordion";
import prisma from "@/lib/prisma";

export default async function Home() {
  const dataLearning= await prisma.learn.findMany();
  return (
    <div className="">
      <div className="bg-Primary min-w-max p-10 flex flex-col justify-center items-center relative">
        <Accordion items={dataLearning as learnPayload[]}/>
      </div>
    </div>
  );
}
