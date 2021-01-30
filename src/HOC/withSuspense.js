import React, {Suspense} from "react";


export const withSuspense = (Component) => {
    let ComponentWithSuspense = (props) => {
        return <Suspense fallback={<div>Минуточку...</div>}><Component {...props}/></Suspense>
    }
    return ComponentWithSuspense
}