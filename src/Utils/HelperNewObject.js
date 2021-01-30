export const HelperNewObject = (items, Itemid, objPropName, newObjectProps) => {
    return items.map(u => {
        if (u[objPropName] === Itemid) {
            return {...u, ...newObjectProps}
        }
        return u
    })
}