import { API } from "../../../api";
import { baseApi } from "../../api/baseApi";

export const eventsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEventDetails: builder.query({
      query: ({ eventTypeId, eventId }) => {
        return {
          url: `${API.eventDetails}/${eventTypeId}/${eventId}`,
          method: "GET",
          headers: {
            "Cache-Control": "public",
            "max-age": 1,
          },
        };
      },
    }),
    order: builder.mutation({
      query: (payload) => {
        return {
          url: `${API.order}`,
          method: "POST",
          body: payload,
        };
      },
    }),
  }),
});

export const { useGetEventDetailsQuery, useOrderMutation } = eventsApi;
