import type { Ref, HTMLInputTypeAttribute } from "react";
import uuid from "../../helpers/uuid"
import Input from "../../components/Input";
import Label from "../../components/Label";

interface Props {
    inputRef: Ref<HTMLInputElement>;
    placeholder?: string;
    name: string;
    type: HTMLInputTypeAttribute;
}

export default function Field({inputRef, name, placeholder, type} : Props) {
    const id = uuid()

    return (
        <div>
            <Label
                id={id}
                name={name}
            />
            <Input
                inputRef={ inputRef }
                type={type}
                id={id}
                placeholder={placeholder}
            />
        </div>
    )
}