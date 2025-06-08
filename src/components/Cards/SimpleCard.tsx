import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function SimpleCard({ children }: Props) {
    return (
        <div className="bg-gray-100 rounded p-2 w-full flex flex-col items-start justify-center hover:bg-gray-200">
            {children}
        </div>
    )
}