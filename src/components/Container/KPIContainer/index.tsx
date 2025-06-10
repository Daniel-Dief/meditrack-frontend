import type { ReactNode } from 'react';

interface Props {
    children?: ReactNode;
}

export default function KPIContainer({ children } : Props ) {
    return (
        <div className="w-full flex item-center justify-between gap-4 p-6 border border-gray-200 rounded-2xl hover:bg-[#bae8ea] transition-colors duration-400">
            {children}
        </div>
    )
}