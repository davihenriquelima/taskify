import { listReducer } from "@/reducers/listReducer";
import { ItemList } from "@/types/ItemList";
import { createContext, ReactNode, useContext, useReducer } from "react";

type ListContextType = {
    list: ItemList[];
    addItem:(input:string, setInput:(text:string)=>void) => void;
    removeItem:(id:number) => void;
    toggleItem:(id:number)=> void;
    editItem:(id:number, newText:string) =>void
    handleKeyDown:(id: number, event: React.KeyboardEvent<HTMLElement>, onFinish:()=>void) => void
}

export const ListContext = createContext<ListContextType | null >(null);

export const ListProvider = ({children}:{children:ReactNode})=> {
    const [list, dispatch] = useReducer(listReducer, []);

    const addItem = (input:string, setInput:(text:string)=>void) => {
        if(input.trim() === '') return false;
        dispatch({
          type:'add',
          payload: {
            text:input.trim()   
          }     
        });
        setInput('');
    };
      
    const editItem = (id:number, text:string)=> {
        if(text.trim() === '') {
            removeItem(id)
            return false;
        }
      
        dispatch({
            type:'edit',
            payload: {
            id:id,
            newText:text.trim()
            }
        });
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

    const handleKeyDown = (id: number, event: React.KeyboardEvent<HTMLElement>, onFinish:()=>void) => {
        if (event.key.toLowerCase() === 'enter') {
          event.preventDefault();
          const text = (event.target as HTMLElement).innerText || '';
          editItem(id, text);
          onFinish();
        }
    };

    return (
        <ListContext.Provider value={{list, addItem, editItem, toggleItem, removeItem, handleKeyDown}}>
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