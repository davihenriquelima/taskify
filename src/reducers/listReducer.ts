import { ItemList } from "@/types/ItemList";

type AddAction = {
    type:'add';
    payload: {
        id:number;
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
        title:string;
        desc:string
    }
}

type RemoveAction = {
    type:'remove'
    payload:{
        id:number;
    }
}

type ListAction = AddAction | RemoveAction | ToggleAction | EditAction;

export const listReducer = (list:ItemList[], action:ListAction) : ItemList[]=> {
    switch(action.type) {
        case 'add':
            return [...list, {
                id:action.payload.id,
                title:"",
                desc:"",
                done:false
            }];
        case 'edit':
            return list.map(item => {
                if(item.id === action.payload.id) {
                    return {...item, 
                        title: action.payload.title,
                        desc:action.payload.desc
                    };
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