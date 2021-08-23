import {Button} from "antd";
import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import styles from "./TestApp4.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AimActions} from "../../../../Redux/Reducers/AimGameReducer";
import {AppStateType} from "../../../../Redux/ReduxStore";
import {NullableType} from "../../../../Types/Types";


export const TestApp4: React.FC = () => {
    const [isOpen, SetIsOpen] = useState(false)

    return <div className={isOpen? `${styles.body} ${styles.open}`: styles.body}>
        <div className={styles.OpenBlock}>
            <Button type={"link"} onClick={() => {
                SetIsOpen(!isOpen)
            }}>
                {isOpen? 'Close' : 'Full screen'}
            </Button>
        </div>
        <StartScreen/>
        <SecondScreen/>
        <GameScreen/>
    </div>
}

const StartScreen: React.FC = () => {
    const isStartGame = useSelector((state: AppStateType) => state.Aim.gameStart)
    const dispatch = useDispatch()
    const StartGame = () => {
        dispatch(AimActions.SetGameStart(true))
    }
    return <div className={isStartGame ? `${styles.screen} ${styles.up}` : styles.screen}>
        <h1>Aim Training</h1>
        <NavLink to={"#"} className={styles.start}
                 onClick={StartGame} id="start">
            Начать игру
        </NavLink>
    </div>
}

const SecondScreen: React.FC = () => {
    const dispatch = useDispatch()
    const SetTime = (time: number) => {
        dispatch(AimActions.SetGameTime(time))
    }
    const GameTime = useSelector((state: AppStateType) => state.Aim.gameTime)
    return <div className={GameTime ? `${styles.screen} ${styles.up}` : styles.screen}>
        <h1>Выберите время</h1>
        <ul className={styles.time_list} id="time-list">
            <li>
                <button className={styles.time_btn} onClick={() => {
                    SetTime(10)
                }}>
                    10 сек
                </button>
            </li>
            <li>
                <button className={styles.time_btn} onClick={() => {
                    SetTime(20)
                }}>
                    20 сек
                </button>
            </li>
            <li>
                <button className={styles.time_btn} onClick={() => {
                    SetTime(30)
                }}>
                    30 сек
                </button>
            </li>
            <li>
                <button className={styles.time_btn} onClick={() => {
                    SetTime(40)
                }}>
                    40 сек
                </button>
            </li>
        </ul>

    </div>
}

type CircleStyleType = {
    width: string
    height:  string
    top:  string
    left:  string
    backgroundColor: string
}

const GameScreen: React.FC = () => {

    const Random = (min: number, max: number) => {
        return Math.round(Math.random() * (max - min) + min)
    }

    const arrayRandElement = () => {
        const ColorsArray = ['#2F4F4F', '#00FFFF', '#006400', '#FFD700', '#B22222', '#EE82EE', '#EECFA1', '#00BFFF']
        const rand = Math.floor(Math.random() * ColorsArray.length);
        return ColorsArray[rand];
    }

    const GameTime = useSelector((state: AppStateType) => state.Aim.gameTime)
    useEffect(() => {
        SetTime(String(GameTime))
        if (GameTime) {
            ChangeCircle()
            Tick()
        }
    }, [GameTime])

    const [Score, SetScore] = useState(0)
    const [time, SetTime] = useState(String(GameTime))
    const [isError, SetError] = useState(false)
    const [CircleStyle, SetCircleStyle] = useState<CircleStyleType | undefined>(undefined)

    const ChangeCircle = (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!isEnd){
            // @ts-ignore
            if ((event && event.target.id === "circle") || !event) {
                if (event) {
                    SetScore((prevScore) => prevScore + 1)
                }
                const RandomSize = Random(10, 60)
                const {width, height} = {width: 500, height: 500}
                const x = Random(0, width - RandomSize)
                const y = Random(0, height - RandomSize)
                const color = arrayRandElement()
                SetCircleStyle({
                    width: `${RandomSize}px`,
                    height: `${RandomSize}px`,
                    top: `${y}px`,
                    left: `${x}px`,
                    backgroundColor: color
                })
            } else {
                SetScore((prevScore) => {
                    if (prevScore === 0) {
                        return 0
                    }
                    return prevScore - 1
                })
                SetError(true)

                setTimeout(() => {
                    SetError(false)
                    ChangeCircle()
                }, 500)
            }
        }

    }



    const Tick = () => {
        setInterval(() => {
            SetTime((prevTime) => {
                if (Number(prevTime) <= 10) {
                    return '0' + String(Number(prevTime) - 1)
                }
                return String(Number(prevTime) - 1)
            })
        }, 1000)

    }

    const isEnd = time === '0-1' || time === 'NaN'

    return <div className={styles.screen}>
        <h3 className={isEnd ? styles.hide : undefined}>Осталось
            <span id="time"> 00:{time}</span>
            <span>  Счёт:
                <span id="score" className={styles.primary}> {Score}</span>
            </span>
        </h3>
        <div className={isError ? `${styles.board} ${styles.error}` : styles.board} onClick={ChangeCircle}>
            {!isEnd ? isError? null: <div id ='circle' className={styles.circle} style={CircleStyle}/>:
                <h1>Ваш счёт:
                    <span className={styles.primary}> {Score}</span>
                </h1>}
        </div>
    </div>
}