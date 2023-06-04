import { Dispatch, SetStateAction } from 'react';
import { Button } from '@mui/material';
import { AiOutlineArrowLeft, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

import { AppState, AppStatePage } from '../state/app.state';



interface PageProps { state: AppState, setState: Dispatch<SetStateAction<AppState>> };



export function P14_Q9(props: PageProps) {

    const onBack = () => {
        props.setState({ ...props.state, page: AppStatePage.Q8 });
    };
    
    const onSelect = (value: number) => {
        const newData = [ ...props.state.data ];
        newData[8] = value;

        props.setState({ 
            page: AppStatePage.Q10,
            data: newData
        });
    };





    return <>
        {/* Back button.  */}
        <Button variant='text' color='primary' onClick={onBack} className='absolute top-0 left-0 mt-4 ml-4'>
            <AiOutlineArrowLeft className='my-2 text-xl' />
        </Button>

        <h1 className='mb-8 text-4xl text-center font-bold'>
            📝 Question 13 : A9 📝
        </h1>

        <p className='mb-8 text-center text-lg font-light'>
            I find it easy to work out what someone is <br/>
            thinking or feeling just by looking at their face
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