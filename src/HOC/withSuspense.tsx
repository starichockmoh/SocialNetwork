import React, {Suspense} from "react";


export const withSuspense = (Component:any) => {
    let ComponentWithSuspense = (props:any) => {
        return <Suspense fallback={<div>Минуточку...</div>}><Component {...props}/></Suspense>
    }
    return ComponentWithSuspense
}