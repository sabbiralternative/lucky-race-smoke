import { useQuery } from "@tanstack/react-query";
import { AxiosSecure } from "../lib/AxiosSecure";
import { API } from "../api";

export const usePayout = (payload) => {
  return useQuery({
    queryKey: ["payout", payload],
    queryFn: async () => {
      const { data } = await AxiosSecure.post(API.payout, payload);
      return data;
    },
    gcTime: 0,
  });
};
