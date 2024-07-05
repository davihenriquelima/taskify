"use client"

import { listReducer } from "@/reducers/listReducer";
import { ItemList } from "@/types/ItemList";
import { createContext, ReactNode, useContext, useReducer, useEffect, useState } from "react";
import { saveEditingItemLS, loadEditingItemLS, removeEditingItemLS } from "@/utils/localStorage";

type ListContextType = {
    list: ItemList[];
    addItem:()=>void;
    removeItem:(id:number) => void;
    toggleItem:(id:number)=> void;
    editItem:(id:number, title:string, desc:string) =>void;
    handleKeyDown:(id: number, event: React.KeyboardEvent<HTMLElement>, onFinish:()=>void) => void;
    editingItem: ReactNode;
    setEditingItem:(id:number|null) => void;
}

export const ListContext = createContext<ListContextType | null >(null);

export const ListProvider = ({children}:{children:ReactNode})=> {
    const [list, dispatch] = useReducer(listReducer, []);
    const [editingItem, setEditingItem] = useState<number | null>(null);

    const addItem = () => {
        
        const id = list.length > 0 ? list[list.length - 1].id + 1 : 0
        dispatch({
            type:'add',
            payload: {
                id:id,
            }   
        });
        setEditingItem(id)
    };
      
    const editItem = (id:number, title:string, desc:string)=> {
        if((title.trim() === '' ) && (desc.trim() === '')) {
            removeItem(id)
            return false;
        }
      
        dispatch({
            type:'edit',
            payload: {
                id:id,
                title:title.trim(),
                desc:desc.trim()
            }
        });

        setEditingItem(null);
        removeEditingItemLS();
    };
      
    const toggleItem = (id:number) => {
        dispatch({
            type:'toggle',
            payload: {
            id:id
        }
        });
    };
      
    const removeItem = (id:number) => {
        dispatch({
            type:'remove',
            payload: {
            id:id
            }
        });
    }

    const handleKeyDown = (id: number, event: React.KeyboardEvent<HTMLElement>, onFinish: () => void) => {
        if (event.key.toLowerCase() === 'enter') {
            event.preventDefault();
    
            const editingElement = document.querySelector(`li.editing`);
            if (editingElement) {
                const title = editingElement.querySelector('p[data-field="title"]')?.innerHTML || '';
                const desc = editingElement.querySelector('p[data-field="desc"]')?.innerHTML || '';
                editItem(id, title, desc);
                onFinish();
            }
        }
    };

    useEffect(()=> {
        const { savedEditingItem, savedEditingItemTitle, savedEditingItemDesc } = loadEditingItemLS();
        if(savedEditingItem) {
            const item = list.find(item => item.id === savedEditingItem);
            if(item){ 
                item.title = savedEditingItemTitle;
                item.desc = savedEditingItemDesc;
            }
        }
    },[])

    return (
        <ListContext.Provider value={{list, addItem, editItem, toggleItem, removeItem, handleKeyDown, editingItem, setEditingItem}}>
            {children}
        </ListContext.Provider>
    )   
}

export const useListCtx = () => {
    const context = useContext(ListContext);
    if (!context) {
        throw new Error('useListCtx must be used within a ListProvider');
    }
    return context;
};