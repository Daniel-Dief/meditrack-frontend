export default function Title({ text }: { text: string }) {
    return (
        <h1 className="text-2xl text-black font-bold">
            {text}
        </h1>
    );
}