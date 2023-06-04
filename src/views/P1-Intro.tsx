
import { Dispatch, SetStateAction } from 'react';
import { Button } from '@mui/material';
import { AiOutlineArrowRight } from 'react-icons/ai';

import { AppState, AppStatePage } from '../state/app.state';



interface PageProps { state: AppState, setState: Dispatch<SetStateAction<AppState>> };

export function P1_Intro(props: PageProps) {

    const onStart = () => {
        props.setState({ ...props.state, page: AppStatePage.Q_AGE });
    };


    return <>
        <h1 className='mb-8 text-4xl text-center font-bold'>
            😇 Welcome to IndiVerse 👋
        </h1>

        <p className='text-center text-lg font-light'>
            Guiding Paths, Embracing Differences
        </p>

        <p className='mb-8 text-center text-xl font-light'>
            Empowering Autism with Compassionate Screening
        </p>

        <Button variant='contained' color='primary' className='w-full' onClick={onStart}>
            Start Screening Now
            <AiOutlineArrowRight className='ml-2' />
        </Button>
    </>
}