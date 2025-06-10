interface Props {
    onClick?: () => void;
    children?: React.ReactNode;
    className?: string;
    color?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
}

export default function Button( { onClick, children, className, color, size } : Props ) {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded transition-colors focus:outline-none ${className}
                ${color === 'primary' ? 'bg-[#A8DADC] hover:bg-[#B8E6E8] text-black cursor-pointer transition duration-300' : ''}
                ${color === 'secondary' ? 'bg-white hover:bg-[#B8E6E8] text-black cursor-pointer transition duration-300' : ''}
                ${size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base'}
            `}
        >
            {children}
        </button>
    )
}