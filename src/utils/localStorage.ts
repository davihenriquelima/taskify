export const saveEditingItemLS = (id:number, text:string) => {
    localStorage.setItem('itemEditing', id.toString());
    localStorage.setItem('editingText', JSON.stringify(text));
};

export const loadEditingItemLS = () => {
    const editingItem = localStorage.getItem('itemEditing');
    const editingText = localStorage.getItem('editingText');
    return {
        savedEditingItem: editingItem ? Number(editingItem) : null,
        savedEditingText: editingText ? JSON.parse(editingText) : ''
    };
};

export const removeEditingItemLS = () => {
    localStorage.removeItem('itemEditing');
    localStorage.removeItem('editingText');
};  