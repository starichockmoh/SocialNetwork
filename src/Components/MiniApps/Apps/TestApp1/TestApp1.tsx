import React, {useEffect, useRef, useState} from "react";
import "./TestApp1.css"


export const TestApp1: React.FC = () => {
    return <div className="body">
        <div>
            <div className="row">
                <div className="col-header start">Начать</div>
                <div className="col-header progress">В процессе</div>
                <div className="col-header done">Готовы</div>
            </div>
            <div className="row">

                <PlaceHolder isStart={true}/>
                <PlaceHolder/>
                <PlaceHolder/>
            </div>
        </div>
    </div>
}

const Item: React.FC = () => {
    const [DragState, SetDragState] = useState<'START' | 'END'>('END')
    return <div onDragStart={() => SetDragState("START")} onDragEnd={() => SetDragState("END")}
                className={DragState === "START"? "item hold": "item"}
                draggable="true">
        Перетащи меня
    </div>
}

const PlaceHolder: React.FC<{isStart?: boolean}> = ({isStart}) => {
    const [DragState, SetDragState] = useState<'LEAVE' | 'ENTER' | 'DROP'| null>(null)
    const onOver = (e:  React.DragEvent<HTMLDivElement>) => e.preventDefault()

    return <div className={DragState === 'DROP'? "placeholder": DragState === 'ENTER'? "placeholder hovered": "placeholder"}
                onDragLeave={() => SetDragState('LEAVE')}
                onDragEnter={() => SetDragState('ENTER')}
                onDrop={() => SetDragState('DROP')}
                onDragOver={onOver}
    >
        {DragState === "DROP" || (isStart && !DragState)? <Item/>: null}
    </div>
}

