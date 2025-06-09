import type { ReactNode } from 'react';

interface Props {
    children?: ReactNode;
}

export default function BackgroundContainer({ children } : Props) {
    return (
        <div className='flex items-center justify-start gap-2 p-4 hover:bg-[#DEE7E7] w-full h-fit transition-colors duration-200 rounded'>
            {children}
        </div>
    )
}