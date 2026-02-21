import { useQuery } from "@tanstack/react-query";
import { AxiosSecure } from "../lib/AxiosSecure";
import { API } from "../api";

export const useGetBets = (payload) => {
  return useQuery({
    queryKey: ["bets", payload],
    queryFn: async () => {
      const { data } = await AxiosSecure.post(API.bets, payload);
      return data;
    },
  });
};
