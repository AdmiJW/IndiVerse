import { Dispatch, SetStateAction } from 'react';
import { Button } from '@mui/material';
import { AiOutlineArrowLeft, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

import { AppState, AppStatePage } from '../state/app.state';



interface PageProps { state: AppState, setState: Dispatch<SetStateAction<AppState>> };



export function P4_Jaundice(props: PageProps) {

    const onBack = () => {
        props.setState({ ...props.state, page: AppStatePage.Q_GENDER });
    };
    
    const onSelect = (isJundice: boolean) => {
        const newData = [ ...props.state.data ];
        newData[13] = isJundice ? 0 : 1;
        newData[14] = isJundice ? 1 : 0;

        props.setState({ 
            page: AppStatePage.Q_AUTISM,
            data: newData
        });
    };





    return <>
        {/* Back button.  */}
        <Button variant='text' color='primary' onClick={onBack} className='absolute top-0 left-0 mt-4 ml-4'>
            <AiOutlineArrowLeft className='my-2 text-xl' />
        </Button>

        <h1 className='mb-8 text-4xl text-center font-bold'>
            Question 3 : Jaundice ⚕️
        </h1>

        <p className='mb-8 text-center text-lg font-light'>
            Is the person being assessed born with jaundice?
        </p>

        <div className='flex justify-center'>
            <Button variant='contained' color='primary' className='mr-4' onClick={() => onSelect(true)}>
                Yes
                <AiOutlineCheck className='ml-2' />
            </Button>
            
            <Button variant='contained' color='error' onClick={() => onSelect(false)}>
                No
                <AiOutlineClose className='ml-2' />
            </Button>
        </div>
    </>
}