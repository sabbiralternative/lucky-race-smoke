import { API } from "../../../api";
import { baseApi } from "../../api/baseApi";

export const casinoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLiveCasinoThumbnail: builder.query({
      query: ({ id }) => {
        const params = new URLSearchParams();
        params.append("id", id);
        return {
          url: `${API.casino}`,
          method: "GET",
          params,
        };
      },
    }),
  }),
});

export const { useGetLiveCasinoThumbnailQuery } = casinoApi;
