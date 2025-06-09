import type { ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

export default function SimpleContainer({ children }: Props) {
    return (
        <div className="w-full h-fit p-4 border border-gray-200 rounded-2xl flex flex-col items-center m-6 gap-4">
            {children}
        </div>
    )
}