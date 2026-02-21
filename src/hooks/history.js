import { useQuery } from "@tanstack/react-query";
import { AxiosSecure } from "../lib/AxiosSecure";
import { API } from "../api";

export const useGetHistory = (payload) => {
  return useQuery({
    queryKey: ["history", payload],
    queryFn: async () => {
      const { data } = await AxiosSecure.post(API.history, payload);
      return data;
    },
  });
};
