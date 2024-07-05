"use client";

import { useListCtx } from "@/contexts/ListContext";
import ItensListing from "./ItensListing";

export const ToDoList = () => {
  const listCtx = useListCtx();

  return (
    <div className="container flex max-w-3xl flex-col items-center p-4">
      <div className="flex w-full justify-center" >
        <button 
          onClick={() => {
            if (listCtx) {
              listCtx.addItem();
            }
          }}
          className="flex w-14 h-14 text-3xl p-3 font-extrabold bg-emerald-800 text-white rounded-full justify-center items-center" title="New Task">
            +
        </button>
      </div>
      <ItensListing/> 
    </div>
    
  )
}