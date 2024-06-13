import { useMutation } from "@tanstack/react-query"
import { addPost } from "./api"
import { queryClient } from "./queryClient";
import { Post } from "@/types/Post";

export const useAddPost = () => {
    const mutation = useMutation({
        mutationFn: addPost,
        onMutate: (data) => { //side effects no mutation
          console.log("dados da mutation", data);
        },
        onError: (error,data,context) => {
            console.log(error);
        },
        onSuccess: (error,data:Omit<Post, "id">,context) => {
          const posts = queryClient.getQueryData(['posts']) as Post[];
          queryClient.setQueryData(['posts'], [data, ...posts]);
        },
        onSettled: () => {
            console.log('finalizando')
        }
      })
    return mutation;
}
