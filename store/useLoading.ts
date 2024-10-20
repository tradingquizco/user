import { create } from "zustand";

interface IUseLoading {
    loading: boolean,
    error: string | null,

    setError: (error: string | null) => void;
    setLoading: (statue: boolean) => void;

}

const useLoading = create<IUseLoading>((set, get) => ({
    loading: false,
    error: null,

    setError: (error) => (set({error})),
    setLoading: (loading) => set({loading}),
}))


export default useLoading;