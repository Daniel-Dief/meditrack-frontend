interface Props {
    text: string,
    size?: "big"
}

export default function Title({ text, size }: Props) {
    return (
        <h1 className={`text-black font-bold ${size === "big" ? "text-3xl" : "text-2xl"}`}>
            {text}
        </h1>
    );
}