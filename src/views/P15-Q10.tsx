import { Dispatch, SetStateAction } from 'react';
import { Button } from '@mui/material';
import { AiOutlineArrowLeft, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

import { AppState, AppStatePage } from '../state/app.state';
import { autismClassifierService } from '../services/autism-classifier.service';



interface PageProps { state: AppState, setState: Dispatch<SetStateAction<AppState>> };



export function P15_Q10(props: PageProps) {

    const onBack = () => {
        props.setState({ ...props.state, page: AppStatePage.Q9 });
    };
    
    const onSelect = async (value: number) => {
        const newData = [ ...props.state.data ];
        newData[9] = value;

        const isAutism = await autismClassifierService.predict(newData);

        props.setState({
            page: isAutism ? AppStatePage.RESULT_AUTISM : AppStatePage.RESULT_NOT_AUTISM,
            data: newData,
        });
    };





    return <>
        {/* Back button.  */}
        <Button variant='text' color='primary' onClick={onBack} className='absolute top-0 left-0 mt-4 ml-4'>
            <AiOutlineArrowLeft className='my-2 text-xl' />
        </Button>

        <h1 className='mb-8 text-4xl text-center font-bold'>
            📝 Question 14 : A10 📝
        </h1>

        <p className='mb-8 text-center text-lg font-light'>
            I find it difficult to work out people's intentions
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