import { keepPreviousData, QueryClientProvider, useQuery, useQueryClient } from "@tanstack/react-query";
import { getPost, getPosts, getUsers } from "./api";
import { postInitialData } from "@/data/postsInitialData";
import { queryClient } from "./queryClient";

export const usePosts = ()=> {
    const query = useQuery({
        queryKey:['posts'],
        queryFn:()=>getPosts(),
        placeholderData:keepPreviousData,
        initialData: postInitialData
    });
    return query;
};

export const usePost = (id:number)=> {
    const query = useQuery({queryKey:['posts', id], queryFn: ()=>getPost(id)});
    return query;
};

export const useUsers = () => {
    const query = useQuery({
        queryKey:['users'],
        queryFn:getUsers
    })
    return query;
}

export const useUsersPrefetch = () => {
    const queryClient = useQueryClient();
    return queryClient.prefetchQuery({
        queryKey:['users'],
        queryFn:getUsers
    })
}

export const invalidatePosts = () => {
    queryClient.invalidateQueries({
        queryKey: ['posts'],
    });
}