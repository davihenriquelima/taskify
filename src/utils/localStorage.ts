export const saveEditingItemLS = (id:number, title:string, desc:string) => {
    localStorage.setItem('itemEditing', id.toString());
    localStorage.setItem('editingItemTitle', JSON.stringify(title));
    localStorage.setItem('editingItemDesc', JSON.stringify(desc));
};

export const loadEditingItemLS = () => {
    const editingItem = localStorage.getItem('itemEditing');
    const editingItemTitle = localStorage.getItem('editingItemTitle');
    const editingItemDesc = localStorage.getItem('editingItemDesc');

    return {
        savedEditingItem: editingItem ? Number(editingItem) : null,
        savedEditingItemTitle: editingItemTitle ? JSON.parse(editingItemTitle) : '',
        savedEditingItemDesc: editingItemDesc ? JSON.parse(editingItemDesc) : '',
    };
};

export const removeEditingItemLS = () => {
    localStorage.removeItem('itemEditing');
    localStorage.removeItem('editingItemTitle');
    localStorage.removeItem('editingItemDesc');

};  