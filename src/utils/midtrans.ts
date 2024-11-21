/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */

import toast from "react-hot-toast";
import prisma from "../lib/prisma";

const getPayment = async (parameter: {
    gross_amount: string;
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    user_id: string;
  }) => {
  
    try {
      // Buat transaksi di Midtran
      // Simpan data transaksi dan payment di Prisma
      const payment = await prisma.payment.create({
        data: {
          first_name: parameter.first_name,
          last_name: parameter.last_name,
          Phone: parameter.phone,
          email: parameter.email,
          user_id: parameter.user_id,
          transaction_id: {
            create: [
              {
                gross_amount: parameter.gross_amount,
              },
            ],
          },
        },
        include: {
          transaction_id: true, // Include untuk mengakses data transaksi
        },
      });
  
      return payment
    } catch (error) {
      console.error("Error creating transaction:", error);
      toast.error("Failed to create transaction.");
    }
  };
  

export default getPayment;
