import { useQuery } from "@tanstack/react-query";
import { AxiosSecure } from "../lib/AxiosSecure";
import { API } from "../api";

export const useRulesQuery = (payload) => {
  return useQuery({
    queryKey: ["rules", payload],
    queryFn: async () => {
      const { data } = await AxiosSecure.post(API.rules, payload);
      return data;
    },
    gcTime: 0,
  });
};
