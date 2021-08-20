import React, {useState} from "react";
import "./TestApp.css"
import {Button} from "antd";


export const TestApp: React.FC = () => {
    const [isDisAll, setDisAll] = useState(false)
    const onDis = () => {
        setDisAll(true)
        setDisAll(false)
    }
    return <div className={"body"}>
        <Button onClick={onDis}>
            Скрыть
        </Button>
    <div className="container" >
        <Slide Image={'https://images.unsplash.com/photo-1472148439583-1f4cf81b80e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80'}
               Name={'New-York'} DisAll={isDisAll}/>
        <Slide Image={'https://images.unsplash.com/photo-1499395315858-c4162e2a362f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80'}
               Name={'Moscow'} DisAll={isDisAll} />
        <Slide Image={'https://images.unsplash.com/photo-1477379206551-c71215479841?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1234&q=80'}
               Name={'Saratov'} DisAll={isDisAll} />
        <Slide Image={'https://images.unsplash.com/photo-1472148439583-1f4cf81b80e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80'}
               Name={'Tokyo'} DisAll={isDisAll} />
        <Slide Image={'https://images.unsplash.com/photo-1530423316264-2b8b006f7d63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80'}
               Name={'New-York'} DisAll={isDisAll}/>
    </div>
    </div>
}

type PropsType = {
    Image: string
    Name: string
    DisAll: boolean
}

const Slide:React.FC<PropsType> = ({Image, Name, DisAll}) => {
    const [isActive, setIsActive] = useState(false)
    return <div className={isActive && !DisAll? "slide active": "slide"} style={{color: 'blue', backgroundImage: `url(${Image})`}}
                tabIndex={1}
                onClick={() => {setIsActive(!isActive)}}
                onBlur={() => {setIsActive(false)}}
        >
        <h3>{Name}</h3>
    </div>
}