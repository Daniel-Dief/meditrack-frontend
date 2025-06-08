import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
    align?: "start" | "center" | "end";
}

export default function CardWrapper({ children, align }: Props ) {
    return (
        <div className={"bg-white border-gray-300 w-full shadow-2xl rounded-lg p-6 flex flex-col gap-4 justify-center" + (align ? ` items-${align}` : " items-start")}>
            {children}
        </div>
    );
}