interface Props {
    text: string;
    color?: string
    textColor?: string;
}

export default function RoundedText({ text, color, textColor }: Props) {
    return (
        <div className={`rounded-full px-4 py-2 text-center font-semibold ${textColor || 'text-black'} ${color || 'bg-gray-200'}`}>
            {text}
        </div>
    );
}