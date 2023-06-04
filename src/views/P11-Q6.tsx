import { Dispatch, SetStateAction } from 'react';
import { Button } from '@mui/material';
import { AiOutlineArrowLeft, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

import { AppState, AppStatePage } from '../state/app.state';



interface PageProps { state: AppState, setState: Dispatch<SetStateAction<AppState>> };



export function P11_Q6(props: PageProps) {

    const onBack = () => {
        props.setState({ ...props.state, page: AppStatePage.Q5 });
    };
    
    const onSelect = (value: number) => {
        const newData = [ ...props.state.data ];
        newData[5] = value;

        props.setState({ 
            page: AppStatePage.Q7,
            data: newData
        });
    };





    return <>
        {/* Back button.  */}
        <Button variant='text' color='primary' onClick={onBack} className='absolute top-0 left-0 mt-4 ml-4'>
            <AiOutlineArrowLeft className='my-2 text-xl' />
        </Button>

        <h1 className='mb-8 text-4xl text-center font-bold'>
            📝 Question 10 : A6 📝
        </h1>

        <p className='mb-8 text-center text-lg font-light'>
            I know how to tell if someone listening <br/>to me is getting bored.
        </p>

        <Button variant='outlined' className='mb-2' color='primary' fullWidth onClick={() => onSelect(0)}>
            Definitely Agree
            <AiOutlineCheck className='ml-2' />
        </Button>

        <Button variant='outlined' className='mb-2' color='primary' fullWidth onClick={() => onSelect(0)}>
            Slightly Agree
            <AiOutlineCheck className='ml-2' />
        </Button>

        <Button variant='outlined' className='mb-2' color='error' fullWidth onClick={() => onSelect(1)}>
            Slightly Disagree
            <AiOutlineClose className='ml-2' />
        </Button>

        <Button variant='outlined' className='mb-2' color='error' fullWidth onClick={() => onSelect(1)}>
            Definitely Disagree
            <AiOutlineClose className='ml-2' />
        </Button>
    </>
}