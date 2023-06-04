import { Dispatch, SetStateAction } from 'react';
import { Button } from '@mui/material';

import { AppState, initialState } from '../state/app.state';



interface PageProps { state: AppState, setState: Dispatch<SetStateAction<AppState>> };

export function P17_NotAutism(props: PageProps) {


    const reset = () => {
        props.setState(initialState);
    };


    return <>
        <h1 className='mb-8 text-4xl text-center font-bold'>
            ✅ Result : Not Autism ✅
        </h1>

        <p className='mb-8 text-center text-lg font-light'>
            Based on the information you provided and our screening assessment, <br/>
            it does not appear that you display characteristics associated with autism. <br/>
            However, it is important to note that our assessment tool is not a substitute for <br/>
            a comprehensive evaluation conducted by a qualified healthcare professional or specialist. <br/>
            If you have any concerns about your well-being or would like further clarification, <br/>
            we recommend consulting with a healthcare professional who can provide personalized <br/>
            guidance and support.
        </p>

        <Button variant='outlined' className='mb-2' color='primary' fullWidth onClick={reset}>
            Reset 🔁
        </Button>
    </>
}