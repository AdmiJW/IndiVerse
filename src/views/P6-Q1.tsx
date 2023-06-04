import { Dispatch, SetStateAction } from 'react';
import { Button } from '@mui/material';
import { AiOutlineArrowLeft, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

import { AppState, AppStatePage } from '../state/app.state';



interface PageProps { state: AppState, setState: Dispatch<SetStateAction<AppState>> };



export function P6_Q1(props: PageProps) {

    const onBack = () => {
        props.setState({ ...props.state, page: AppStatePage.Q_AUTISM });
    };
    
    const onSelect = (value: number) => {
        const newData = [ ...props.state.data ];
        newData[0] = value;

        props.setState({ 
            page: AppStatePage.Q2,
            data: newData
        });
    };





    return <>
        {/* Back button.  */}
        <Button variant='text' color='primary' onClick={onBack} className='absolute top-0 left-0 mt-4 ml-4'>
            <AiOutlineArrowLeft className='my-2 text-xl' />
        </Button>

        <h1 className='mb-8 text-4xl text-center font-bold'>
            📝 Question 5 : A1 📝
        </h1>

        <p className='mb-8 text-center text-lg font-light'>
            I often notice small sounds when others do not.
        </p>

        <Button variant='outlined' className='mb-2' color='primary' fullWidth onClick={() => onSelect(1)}>
            Definitely Agree
            <AiOutlineCheck className='ml-2' />
        </Button>

        <Button variant='outlined' className='mb-2' color='primary' fullWidth onClick={() => onSelect(1)}>
            Slightly Agree
            <AiOutlineCheck className='ml-2' />
        </Button>

        <Button variant='outlined' className='mb-2' color='error' fullWidth onClick={() => onSelect(0)}>
            Slightly Disagree
            <AiOutlineClose className='ml-2' />
        </Button>

        <Button variant='outlined' className='mb-2' color='error' fullWidth onClick={() => onSelect(0)}>
            Definitely Disagree
            <AiOutlineClose className='ml-2' />
        </Button>
    </>
}