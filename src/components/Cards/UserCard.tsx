import { User, Calendar, PhoneIcon, Mail } from 'lucide-react'
import CardWrapper from './CardWrapper';
import RoundedText from '../Texts/RoundedText';
import Title from '../Texts/Title';

interface Props {
    Status: string;
    Name: string;
    BirthDate: string;
    Phone: string;
    Email: string;
}

export default function UserCard( { Status, Name, BirthDate, Phone, Email } : Props ) {
    return (
        <CardWrapper align='center'>
            <div className='flex flex-col items-center justify-center gap-2 w-full mx-20'>
                <div className="w-min p-4 flex justify-center rounded-full bg-gray-200">
                    <User size="48"/>
                </div>
                <Title text={Name}/>
                <RoundedText
                    text={Status}
                />
            </div>
            <div className='flex flex-col items-start gap-2 w-full'>
                <div className='flex items-center gap-2'>
                    <Calendar size="16" />
                    <span className='text-gray-600'>Nascimento: {BirthDate}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <PhoneIcon size="16" />
                    <span className='text-gray-600'>Telefone: {Phone}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <Mail size="16" />
                    <span className='text-gray-600'>Email: {Email}</span>
                </div>
            </div>
        </CardWrapper>
    );
}