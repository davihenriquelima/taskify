import { Item } from "@/types/Item";

type AddAction = {
    type:'add';
    payload: {
        text:string;
    }
}

type ToggleAction = {
    type:'toggle'
    payload: {
        id:number;
    }
}

type EditAction = {
    type:'edit'
    payload:{
        id:number;
        newText:string;
    }
}

type RemoveAction = {
    type:'remove'
    payload:{
        id:number;
    }
}

type ListAction = AddAction | RemoveAction | ToggleAction | EditAction;

export const listReducer = (list:Item[], action:ListAction) : Item[]=> {
    switch(action.type) {
        case 'add':
            const idItem = list.length > 0 ? list[list.length - 1].id + 1 : 0;
            return [...list, {
                id:idItem,
                text:action.payload.text,
                done:false
            }];
        case 'edit':
            return list.map(item => {
                if(item.id === action.payload.id) {
                    item.text = action.payload.newText;
                }
                return item;
            });
        case 'toggle':
            return list.map(item => {
                if(item.id === action.payload.id) {
                    return { ...item, done: !item.done };
                }
                return item;
            });

        case 'remove':
            return list.filter(item => item.id !== action.payload.id);
        
        default:
            return list;
    }
}