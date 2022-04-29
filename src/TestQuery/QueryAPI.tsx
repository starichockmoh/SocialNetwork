import React from 'react';
import axios from 'axios';
import {useQuery} from 'react-query';
import Button from "./../UIKit/src/Button/index";
import ButtonWithIcon from "./../UIKit/src/ButtonWithIcon/index"

import Spinner from "../UIKit/src/Spinner";
import Clock from "../UIKit/src/Clock/Clock";



export const AppQTest: React.FC = () => {
    const {isLoading, error, data} = useQuery('fetchLuke', () =>
        axios('https://swapi.dev/api/people/1/'))


    return (
        <div>
            <h1>React Query example with star wars API</h1>

            <div>
                <Button primary>Кнопка первичная</Button>
            </div>

            <div>
                <Button primary disabled>
                    Кнопка первичная отключенная
                </Button>
            </div>

            <div>
                <Button>Кнопка вторичная</Button>
            </div>

            <div>
                <Button disabled>Кнопка вторичная отключенная</Button>
            </div>

            <div>
                <Button primary className="button--small">Малая первичная кнопка</Button>
            </div>

            <div>
                <Button primary className="button--big">Большая первичная кнопка</Button>

            </div>
            <div>
                <ButtonWithIcon glyphNameRight={null} className={''} glyphNameLeft="AlignLeft" primary>
                    Кнопка первичная с левым глифом
                </ButtonWithIcon>

            </div>
            <div>
                {// @ts-ignore
                    <Clock />
                }
            </div>
            <div>
                <Spinner/>
            </div>
            <div>

            </div>



        </div>
    );
}
