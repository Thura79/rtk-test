import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",

  tagTypes: ["Blog"],

  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getBlogs: builder.query({ query: () => "/blogs", providesTags: ["Blog"] }),

    getSingleBlog: builder.query({
      query: (id) => `/blogs/${id}`,
      providesTags: ["Blog"],
    }),

    addBlog: builder.mutation({
      query: (blog) => ({
        url: "/blogs",
        method: "POST",
        body: blog,
      }),
      invalidatesTags: ["Blog"],
    }),

    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Blog"],
    }),

    pathBlog: builder.mutation({
      query: (data) => ({
        url: `/blogs/${data?.id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Blog"],
    }),
  }),
});

export const { useGetBlogsQuery, useGetSingleBlogQuery, useAddBlogMutation, useDeleteBlogMutation, usePathBlogMutation } =
  blogApi;
