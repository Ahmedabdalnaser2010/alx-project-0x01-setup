interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    className = '',
    type = 'button'
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-4 py-2 rounded-lg font-medium transition duration-200 ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;