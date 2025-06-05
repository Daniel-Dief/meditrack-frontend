interface Props {
    children: React.ReactNode
    onClick: () => void
    disable?: boolean
    type?: "button" | "submit" | "reset"
}

export default function BigButton({ children, onClick, disable, type } : Props) {
    return (
        <button 
            onClick={onClick}
            disabled={disable}
            type={type}
            className={`w-full px-4 py-3 text-white text-2xl font-semibold rounded-lg transition-colors duration-200 
                ${disable ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-800 cursor-pointer'}
            `}
        >
            {children}
        </button>
    )
}