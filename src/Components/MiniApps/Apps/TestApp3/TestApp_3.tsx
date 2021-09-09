import React, {useState} from "react";
import styles from "./TestApp3.module.css"
import {Button} from "antd";
import {FormatPainterOutlined} from "@ant-design/icons";



export const TestApp3: React.FC = () => {
    const [SquareCount, SetSquareCount] = useState(980)
    const [FullScreen, SetFullScreen] = useState(false)
    const [color, SetColor] = useState("#1d1d1d")

    const SquareArray = [] as Array<JSX.Element>
    for (let i = 0; i < SquareCount; i++) {
        SquareArray.push(
            <Square key={i} color={color}/>
        )
    }
    const ChangeColor = (color: string) => {
        SetColor(color)
    }
    return <div className={FullScreen ? `${styles.body} ${styles.open}` : styles.body}>

        <div className={styles.ColorList}>
            <h3>
                Colors
            </h3>
            <div>
                <ColorButton color={'#2F4F4F'} ChangeColor={ChangeColor}/>
                <ColorButton color={'#006400'} ChangeColor={ChangeColor}/>
                <ColorButton color={'#00FFFF'} ChangeColor={ChangeColor}/>
                <ColorButton color={'#B22222'} ChangeColor={ChangeColor}/>
                <ColorButton color={'#EECFA1'} ChangeColor={ChangeColor}/>
                <ColorButton color={'#f754e1'} ChangeColor={ChangeColor}/>
                <ColorButton color={'#FFD700'} ChangeColor={ChangeColor}/>
                <ColorButton color={'#0000CD'} ChangeColor={ChangeColor}/>
                <ColorButton color={'#DAA520'} ChangeColor={ChangeColor}/>
            </div>
            <Button className={styles.FullScreenButton} type={"link"} onClick={() => {
                SetFullScreen(!FullScreen)
            }}>
                {FullScreen ? 'Close' : 'Full screen'}
            </Button>

        </div>

        <div className={styles.container}>
            {SquareArray}
        </div>
    </div>
}

const Square: React.FC<{ color: string }> = ({color}) => {
    const [OwnColor, SetOwnColor] = useState('#1d1d1d')

    const AddColor = (newColor: string) => {
        SetOwnColor(newColor)

    }

    return <div className={styles.square}
                onMouseDown={() => AddColor(OwnColor === '#1d1d1d' ? color : '#1d1d1d')}
                style={{background: OwnColor}}>

    </div>
}

type PropsType = {
    color: string
    ChangeColor: (color: string) => void
}

const ColorButton:React.FC<PropsType> = ({color, ChangeColor}) => {
    return  <Button style={{backgroundColor: color}}
                    className={styles.ColorListButton}
                    onClick={() => ChangeColor(color)}
                    icon={<FormatPainterOutlined/>}
    />
}