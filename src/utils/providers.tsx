"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode } from "react";
import { queryClient } from "./queryClient";

export const Providers = ({children}:{children: ReactNode}) => {

    return (
        <QueryClientProvider client = {queryClient}>
            {children}
            <ReactQueryDevtools 
                initialIsOpen= {false}
                buttonPosition="bottom-left"
                position="bottom"
            />
        </QueryClientProvider>
    );
}