import ReactDOM from "react-dom"


interface PortalProps {
    children: React.ReactNode
}

const Portal: React.FC<PortalProps> = ({ children }) => {
    return typeof document === 'object'
        ? ReactDOM.createPortal(children, document.body)
        : null
}

export default Portal