interface StyledH2 { children: React.ReactNode }
export const StyledH2 = ({children}: StyledH2) => <h2 className="text-2xl font-bold mb-4">{children}</h2>

interface StyledLabelProps { children: React.ReactNode }
export const StyledLabel = ({ children }: StyledLabelProps) => <label className="mr-6">{children}</label>

interface StyledInputProps extends React.HTMLProps<HTMLInputElement> {
    name: string,
    id: string,
    type: string
}
export const StyledInput = ({name, id, type, ref}: StyledInputProps) => (
    <input
        name={name}
        id={id}
        type={type}
        className="border-2 border-red-100 rounded-lg p-2 ml-2 my-4" 
        ref={ref}   
    />
)

interface StyledButtonProps extends React.HTMLProps<HTMLButtonElement> {
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    children: React.ReactNode,
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'],
    role?: 'primary' | 'secondary',
    extraClasses?: string[]
}
export const StyledButton = ({ onClick, children, type, role="primary", extraClasses=[]}: StyledButtonProps) => (
    <button onClick={onClick} type={type} className={`
        cursor-pointer
        border-transparent
        border-2
        px-4 py-2
        rounded-lg
        transition
        focus:outline-red-300
        ${role === 'primary' ? `bg-red-200 hover:border-red-300` : `hover:bg-red-100`}
        ${extraClasses.join(' ')}
    `}>
        {children}
    </button>
)

interface StyledLinkProps extends React.HTMLProps<HTMLAnchorElement> {
    type?: 'button' | 'link'
}
export const StyledLink = (props: StyledLinkProps) => (
    <a {...props} className={`
        ${props.type === 'button' ? `
            cursor-pointer
            border-transparent
            border-2
            px-4 py-2
            rounded-lg
            transition
            hover:text-black
        ` : `
            underline
        `}
        ${props.disabled ? `
            bg-gray-100
            cursor-not-allowed
            pointer-events-none
            text-gray-600
        ` : `
            focus:outline-red-300
            bg-red-200
            hover:border-red-300
        `}
    `}>
        {props.children}
    </a>
)