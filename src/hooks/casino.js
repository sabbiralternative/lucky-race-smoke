import { useQuery } from "@tanstack/react-query";
import { AxiosSecure } from "../lib/AxiosSecure";
import { API } from "../api";

export const useGetCasinoThumbnail = ({ id }) => {
  return useQuery({
    queryKey: ["casino", id],
    queryFn: async () => {
      const params = new URLSearchParams();
      params.append("id", id);
      const { data } = await AxiosSecure.get(API.casino, { params });
      return data;
    },
    gcTime: 0,
  });
};
