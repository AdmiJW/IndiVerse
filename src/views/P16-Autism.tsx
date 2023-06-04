import { Dispatch, SetStateAction } from 'react';
import { Button } from '@mui/material';

import { AppState, initialState } from '../state/app.state';



interface PageProps { state: AppState, setState: Dispatch<SetStateAction<AppState>> };

export function P16_Autism(props: PageProps) {


    const reset = () => {
        props.setState(initialState);
    };


    return <>
        <h1 className='mb-8 text-4xl text-center font-bold'>
            ⚠️ Result : Possible Autism ⚠️
        </h1>

        <p className='mb-8 text-center text-lg font-light'>
            Based on the information you provided and our screening assessment, <br/>
            it is important to note that you may display characteristics associated <br/>
            with autism. We encourage you to consult with a qualified healthcare professional <br/>
            or specialist for a comprehensive evaluation and diagnosis. <br/>
            Early detection and intervention can make a significant difference in <br/>
            understanding your unique strengths and challenges, and accessing the appropriate <br/>
            support and resources to thrive.
        </p>

        <Button variant='outlined' className='mb-2' color='primary' fullWidth onClick={reset}>
            Reset 🔁
        </Button>
    </>
}