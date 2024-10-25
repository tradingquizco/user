import { ISubmitInfo } from "@/types";
import { create } from "zustand";
import useLoading from "./useLoading";
import fetchClient from "@/utils/fetchClient";
import Cookies from "js-cookie";

interface IUseQuizzes {
  submitInfo: ISubmitInfo | null;
  getSubmitInfo: (quizId: string) => void;

  submitQuiz: ({
    isCurrect,
    quizId,
    selectedOption,
  }: ISubmitInfo & { quizId: string }) => void;
}

const useQuizzes = create<IUseQuizzes>((set, get) => ({
  submitInfo: null,
  getSubmitInfo: async (quizId) => {
    useLoading.setState({ loading: true });
    const sessionId = Cookies.get("sessionId");

    const { data, isError } = await fetchClient({
      url: `/quizzes/submit/Info?quizId=${quizId}&sessionId=${sessionId}`,
    });
    if (isError) {
      useLoading.setState({ loading: false, error: data });
    } else {
      useLoading.setState({ loading: false, error: null });
      set({ submitInfo: data });
    }
  },

  submitQuiz: async ({ isCurrect, quizId, selectedOption }) => {
    useLoading.setState({ loading: true });
    const sessionId = Cookies.get("sessionId")

    const { data, isError } = await fetchClient({
      url: `/quizzes/submit`,
      options: {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },

        body: JSON.stringify({
          quizId,
          sessionId: sessionId,
          selectedOption,
          isCurrect,
        }),
      },
    });
    if (isError) {
      useLoading.setState({ loading: false, error: data });
    } else {
      useLoading.setState({ loading: false, error: null });
      set({ submitInfo: data });
    }
  },
}));

export default useQuizzes;
