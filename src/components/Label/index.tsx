interface Props {
    id: string,
    name: string;
}

export default function Label({id, name}: Props) {
    return (
        <label
            className="block text-2xl font-medium text-black mb-2"
            htmlFor={id}
        >
            { name }
        </label>
    );
}