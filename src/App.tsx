
import { useState } from 'react'
import { Card } from '@mui/material';

import { initialState, AppState, AppStatePage } from './state/app.state';

import { P1_Intro } from './views/P1-Intro';
import { P2_Age } from './views/P2-Age';
import { P3_Gender } from './views/P3-Gender';
import { P4_Jaundice } from './views/P4-Jaundice';
import { P5_Autism } from './views/P5-Autism';
import { P6_Q1 } from './views/P6-Q1';
import { P7_Q2 } from './views/P7-Q2';
import { P8_Q3 } from './views/P8-Q3';
import { P9_Q4 } from './views/P9-Q4';
import { P10_Q5 } from './views/P10-Q5';
import { P11_Q6 } from './views/P11-Q6';
import { P12_Q7 } from './views/P12-Q7';
import { P13_Q8 } from './views/P13-Q8';
import { P14_Q9 } from './views/P14-Q9';
import { P15_Q10 } from './views/P15-Q10';
import { P16_Autism } from './views/P16-Autism';
import { P17_NotAutism } from './views/P17-NotAutism';



function App() {

    const [ state, setState ] = useState<AppState>(initialState);
    
    return <>
        <main className='min-h-screen grid justify-center content-center'>
            <Card className='
                p-8 mx-4 relative 
                transition-all duration-500 ease-in-out 
                transform scale-100 hover:scale-105
            '>
                <p className='pb-6 text-center text-sm font-light text-gray-600'>
                    Page {state.page} of {AppStatePage.RESULT_NOT_AUTISM}
                </p>

                { state.page === AppStatePage.INTRO && <P1_Intro state={state} setState={setState} /> }
                { state.page === AppStatePage.Q_AGE && <P2_Age state={state} setState={setState} /> }
                { state.page === AppStatePage.Q_GENDER && <P3_Gender state={state} setState={setState} /> }
                { state.page === AppStatePage.Q_JAUNDICE && <P4_Jaundice state={state} setState={setState} /> }
                { state.page === AppStatePage.Q_AUTISM && <P5_Autism state={state} setState={setState} /> }
                { state.page === AppStatePage.Q1 && <P6_Q1 state={state} setState={setState} /> }
                { state.page === AppStatePage.Q2 && <P7_Q2 state={state} setState={setState} /> }
                { state.page === AppStatePage.Q3 && <P8_Q3 state={state} setState={setState} /> }
                { state.page === AppStatePage.Q4 && <P9_Q4 state={state} setState={setState} /> }
                { state.page === AppStatePage.Q5 && <P10_Q5 state={state} setState={setState} /> }
                { state.page === AppStatePage.Q6 && <P11_Q6 state={state} setState={setState} /> }
                { state.page === AppStatePage.Q7 && <P12_Q7 state={state} setState={setState} /> }
                { state.page === AppStatePage.Q8 && <P13_Q8 state={state} setState={setState} /> }
                { state.page === AppStatePage.Q9 && <P14_Q9 state={state} setState={setState} /> }
                { state.page === AppStatePage.Q10 && <P15_Q10 state={state} setState={setState} /> }
                { state.page === AppStatePage.RESULT_AUTISM && <P16_Autism state={state} setState={setState} /> }
                { state.page === AppStatePage.RESULT_NOT_AUTISM && <P17_NotAutism state={state} setState={setState} /> }
            </Card>  
        </main>
    </>
    
}

export default App
