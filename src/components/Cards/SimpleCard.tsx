import type { ReactNode } from "react";

interface Props {
    onClick?: () => void;
    children: ReactNode;
}

export default function SimpleCard({ onClick, children }: Props) {
    return (
        <div
            onClick={onClick}
            className="bg-gray-100 rounded p-2 w-full flex flex-col items-start justify-center hover:bg-gray-200">
            {children}
        </div>
    )
}