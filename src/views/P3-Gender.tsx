import { Dispatch, SetStateAction } from 'react';
import { Button } from '@mui/material';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BiMale, BiFemale } from 'react-icons/bi';

import { AppState, AppStatePage } from '../state/app.state';



interface PageProps { state: AppState, setState: Dispatch<SetStateAction<AppState>> };



export function P3_Gender(props: PageProps) {

    const onBack = () => {
        props.setState({ ...props.state, page: AppStatePage.Q_AGE });
    };
    
    const onSelect = (isMale: boolean) => {
        const newData = [ ...props.state.data ];
        newData[11] = isMale ? 0 : 1;
        newData[12] = isMale ? 1 : 0;

        props.setState({ 
            page: AppStatePage.Q_JAUNDICE,
            data: newData
        });
    };





    return <>
        {/* Back button.  */}
        <Button variant='text' color='primary' onClick={onBack} className='absolute top-0 left-0 mt-4 ml-4'>
            <AiOutlineArrowLeft className='my-2 text-xl' />
        </Button>

        <h1 className='mb-8 text-4xl text-center font-bold'>
            👩‍🦰 Question 2 : Gender 👨
        </h1>

        <p className='mb-8 text-center text-lg font-light'>
            What is the gender of the person being assessed?
        </p>

        <div className='flex justify-center'>
            <Button variant='contained' color='primary' className='mr-4' onClick={() => onSelect(true)}>
                Male
                <BiMale className='mr-2' />
            </Button>
            
            <Button variant='contained' color='error' onClick={() => onSelect(false)}>
                Female
                <BiFemale className='mr-2' />
            </Button>
        </div>
    </>
}