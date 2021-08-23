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
                <Button style={{backgroundColor: '#2F4F4F'}}
                        className={styles.ColorListButton}
                        onClick={() => ChangeColor('#2F4F4F')}
                        icon={<FormatPainterOutlined/>}
                />

                <Button style={{backgroundColor: '#006400'}}
                        className={styles.ColorListButton}
                        onClick={() => ChangeColor('#006400')}
                        icon={<FormatPainterOutlined/>}
                />
                <Button style={{backgroundColor: '#00FFFF'}}
                        className={styles.ColorListButton}
                        onClick={() => ChangeColor('#00FFFF')}
                        icon={<FormatPainterOutlined/>}
                />
                <Button style={{backgroundColor: '#B22222'}}
                        className={styles.ColorListButton}
                        onClick={() => ChangeColor('#B22222')}
                        icon={<FormatPainterOutlined/>}
                />
                <Button style={{backgroundColor: '#EE82EE'}}
                        className={styles.ColorListButton}
                        onClick={() => ChangeColor('#EE82EE')}
                        icon={<FormatPainterOutlined/>}
                />
                <Button style={{backgroundColor: '#EECFA1'}}
                        className={styles.ColorListButton}
                        onClick={() => ChangeColor('#EECFA1')}
                        icon={<FormatPainterOutlined/>}
                />
                <Button style={{backgroundColor: '#FFD700'}}
                        className={styles.ColorListButton}
                        onClick={() => ChangeColor('#FFD700')}
                        icon={<FormatPainterOutlined/>}
                />
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