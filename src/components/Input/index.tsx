import type { Ref, HTMLInputTypeAttribute } from "react";


interface Props {
    inputRef: Ref<HTMLInputElement>;
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
    id: string
}

export default function Input({inputRef, placeholder, type, id} : Props) {
    return (
        <input
            ref={ inputRef }
            type={type}
            id={id}
            className="w-full px-4 py-3 border-3 border-black rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
            placeholder={placeholder}
        />
    )
}