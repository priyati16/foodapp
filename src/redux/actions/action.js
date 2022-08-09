export const ADD =(item)=>{
    return{
        type:"ADD_CART",
        payload:item
    }
}

export const DLT =(id)=>{
    return{
        type:"RMV_CART",
        payload:id
    }
}

//decrease the individual item
export const REMOVE =(iteam)=>{
    return{
        type:"RMV_ONE",
        payload:iteam
    }
}
