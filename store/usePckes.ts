"use client";

import fetchClient from "@/utils/fetchClient";
import { redirect } from "next/navigation";
import { create } from "zustand";
import useLoading from "./useLoading";
import { MessageInstance } from "antd/es/message/interface";
import { IPack, IQuiz } from "@/types";

interface IUsePacksState {
  allPacks: IPack[] | null;
  accountPacks: IPack[] | null;
  loading: boolean;
  errorMessage: string | null;
  packQuizzes: IQuiz[] | null;
  selectedQuiz: IQuiz | null
}
interface IUsePacksAction {
  getAllPacks: () => void;
  getAccountPacks: (sessionId: string) => void;
  addPackToUserPacks: ({
    sessionId,
    packId,
    msgApi,
  }: {
    sessionId: string;
    packId: string;
    msgApi: MessageInstance;
  }) => void;

  getPackQuizzes: (packId: string) => void;
  setSelectedQuiz: (quizId: string) => void
}

const usePacks = create<IUsePacksAction & IUsePacksState>((set, get) => ({
  loading: false,
  errorMessage: null,
  allPacks: null,
  getAllPacks: async () => {
    useLoading.setState({ loading: true });
    const { data, isError } = await fetchClient({ url: "/packs" });
    if (isError) {
      useLoading.setState({ loading: false, error: data });
      set({ allPacks: [] });
    } else {
      useLoading.setState({ loading: false, error: null });
      set({ allPacks: data });
    }
  },

  accountPacks: null,
  getAccountPacks: async (sessionId) => {
    useLoading.setState({ loading: true });
    const { data, isError } = await fetchClient({
      url: `/packs/accountPacksList/${sessionId}`,
    });
    if (isError) {
      useLoading.setState({ loading: false, error: data });
      set({ accountPacks: [] });
    } else {
      useLoading.setState({ loading: false, error: null });
      set({ accountPacks: data });
    }
  },

  addPackToUserPacks: async ({ packId, sessionId, msgApi }) => {
    msgApi.open({ type: "loading", content: "Adding Pack", duration: 0 });
    const { isError, data } = await fetchClient({
      url: "/users/addPack",
      options: {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ packId, sessionId }),
      },
    });
    if (isError) {
      useLoading.setState({ loading: false, error: data });
      msgApi.destroy();
      msgApi.error(data);
    } else {
      useLoading.setState({ loading: false, error: null });
      msgApi.destroy();
      msgApi.success(data.message);
    }
  },

  packQuizzes: null,
  getPackQuizzes: async (packId) => {
    useLoading.setState({ loading: true });
    const { data, isError } = await fetchClient({
      url: `/quizzes/pack/${packId}`,
    });
    if (isError) {
      useLoading.setState({ loading: false, error: data });
      set({ packQuizzes: [] });
    } else {
      useLoading.setState({ loading: false, error: null });
      set({ packQuizzes: data });
    }
  },

  selectedQuiz: null,
  setSelectedQuiz: (quizId) => {
    let selectedQuiz = get().packQuizzes?.find(quiz => quiz.id === quizId);
    set({selectedQuiz});
  }
}));

export default usePacks;
