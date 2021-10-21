

export const updateObjectInArray = (items: any, itemId: number, objPropName: any, newObjProps: any) => {
    return items.map((item: any) => {
        if (item[objPropName] === itemId) {
            return {...item, ...newObjProps}
        }
        return item;
    })
}