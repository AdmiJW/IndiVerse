import { Dispatch, SetStateAction, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import { AppState, AppStatePage } from '../state/app.state';



interface PageProps { state: AppState, setState: Dispatch<SetStateAction<AppState>> };

export function P2_Age(props: PageProps) {

    const [ age, setAge ] = useState<number>(18);


    const onBack = () => {
        props.setState({ ...props.state, page: AppStatePage.INTRO });
    };

    const onSubmit = () => {
        const newData = [ ...props.state.data ];
        newData[10] = age;

        props.setState({
            page: AppStatePage.Q_GENDER,
            data: newData
        });
    }



    return <form onSubmit={onSubmit}>
        {/* Back button.  */}
        <Button variant='text' color='primary' onClick={onBack} className='absolute top-0 left-0 mt-4 ml-4'>
            <AiOutlineArrowLeft className='my-2 text-xl' />
        </Button>

        <h1 className='mb-8 text-4xl text-center font-bold'>
             👶 Question 1: Age 👴
        </h1>

        <p className='mb-8 text-center text-lg font-light'>
            How old is the person you are screening?
        </p>

        <TextField
            className='w-full'
            label='Age'
            type='number'
            variant='outlined'
            required
            inputProps={{ min: 1, max: 100 }}
            value={age}
            onChange={e => setAge(parseInt(e.target.value))}
        />

        <Button variant='contained' color='primary' className='w-full mt-8' type='submit'>
            Next
            <AiOutlineArrowRight className='ml-2' />
        </Button>
    </form>
}