import { create } from "zustand";
import Cookies from "js-cookie";
import useLoading from "./useLoading";
import { MessageInstance } from "antd/es/message/interface";

interface IUseInvite {
  inviteCode: string | null;
  message: string | null;
  isError: boolean;

  getInviteCode: () => void;
  postInvite: (inviteCode: string, msgApi: MessageInstance) => void;
}

const useInvite = create<IUseInvite>((set, get) => ({
  message: null,
  isError: false,

  inviteCode: null,
  getInviteCode: async () => {
    const sessionId = Cookies.get("sessionId");
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API}/users/inviteCode/${sessionId}`
      );

      if(!res.ok) {
        const { message } = await res.json()
        set({message, isError: true})
        return
      }
      set({ inviteCode: await res.json() });
    } catch (err: any) {
      console.log(err);
      set({message: "faild to fetch", isError: true})
    }
  },
  postInvite: async (inviterCode) => {
    const sessionId = Cookies.get("sessionId");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API}/users/invite`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inviterCode, sessionId }),
      });
      if(!res.ok) {
        const { message } = await res.json()
        set({message, isError: true})
        return
      }

      if (res.ok) {
        return;
      }
    } catch (err: any) {
      console.log(err);
      set({message: "faild to fetch",isError: true})
    }
  },
}));

export default useInvite;
