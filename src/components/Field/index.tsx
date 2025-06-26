import type { Ref, HTMLInputTypeAttribute } from "react";
import uuid from "../../helpers/uuid"
import Input from "../../components/Input";
import Label from "../../components/Label";
import SelectBox from "../SelectBox";

interface Props {
    inputRef: Ref<HTMLInputElement | HTMLSelectElement>;
    placeholder?: string;
    name: string;
    type: "select" | HTMLInputTypeAttribute;
    options?: {
        value: string;
        label: string;
    }[];
}

export default function Field({inputRef, name, placeholder, type, options} : Props) {
    const id = uuid()

    return (
        <div>
            <Label
                id={id}
                name={name}
            />
            {
                type === "select" ?
                <SelectBox
                    inputRef={ inputRef as Ref<HTMLSelectElement> }
                    options={options || [] }
                    placeholder={placeholder}
                />
                :
                <Input
                    inputRef={ inputRef as Ref<HTMLInputElement> }
                    type={type}
                    id={id}
                    placeholder={placeholder}
                />
            }
        </div>
    )
}