import { create } from "zustand";
import Cookies from "js-cookie";

interface IUseUsers {
  isUserInvitesUsers: boolean;
  setIsUserInvitesUsers: () => void;
}

const useUser = create<IUseUsers>((set, get) => ({
  isUserInvitesUsers: false,
  setIsUserInvitesUsers: async () => {
    const sessionId = Cookies.get("sessionId");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}/users/numberOfInvites/${sessionId}`
    );
    const numberOfInvites = Number(await res.json());
    set({ isUserInvitesUsers: numberOfInvites >= 2 });
  },
}));

export default useUser;
