import FetchHelper from "@/hooks/useFetch";
import { create } from "zustand";

interface IUsePacksState {
  allPacks: IPack[] | null;
  userPacks: IPack[] | null;
}
interface IUsePacksAction {
  getAllPacks: () => void;
  getUserPacks: (userId: string) => void;
}

const usePacks = create<IUsePacksAction & IUsePacksState>((set, get) => ({
  allPacks: null,
  getAllPacks: async () => {
    const { data, isError } = await FetchHelper({ endPoint: "packs" });
  },

  userPacks: null,
  getUserPacks: () => {},
}));


export default usePacks;