import type { Ref } from "react";

interface Props {
    inputRef: Ref<HTMLSelectElement>;
    placeholder?: string;
    options: {
        value: string;
        label: string;
    }[]
}

export default function SelectBox( { inputRef, placeholder, options } : Props ) {
  return (
    <select
        className="w-full px-4 py-3 border-3 border-black rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
        ref={inputRef}
    >
      <option value="" disabled selected hidden>
        {placeholder || "Selecione uma opção"}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}