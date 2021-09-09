import React, {useState} from "react";

const users = [
    [40, 150, 30],
    [60, 100, 50],
    [90, 34]
]

const Maximus = (users: Array<Array<number>>) => {
    let max = [0,0]
    console.log('ee')
    users.forEach(user => {
        let CurrentMax = Math.max(...user)
        let Max = Math.max(...max)
        if (CurrentMax > Max) {
            max = user
        }
    })
    return max

}


export const TestingUseState: React.FC = () => {
    const [counts, SetCounts] = useState(() => {

        let MaxUser = Maximus(users)
        return {
            c1: MaxUser[0],
            c2: MaxUser[1]
        }

    })
    console.log('app rend')

    return <div style={{margin: 10}}>
        <h1> Testing hooks</h1>
        <div>
            Ivan
            <div>
                {counts.c1}
            </div>
            <button onClick={() => {
                SetCounts((actual) => ({
                    ...actual,
                    c1: actual.c1 + 1
                }))}}>
                +
            </button>
        </div>
        <div>
            Vasya
            <div>
                {counts.c2}
            </div>
            <button onClick={() => {
                SetCounts((actual) => ({
                    ...actual,
                    c2: actual.c2 + 1
                }))}}>
                +
            </button>
        </div>
        <button onClick={() => {
            SetCounts((actual) => ({
                c1: actual.c1 - 1,
                c2: actual.c2 - 1
            }
            ))
        }}>
            -
        </button>

    </div>
}