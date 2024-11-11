import { cn } from "../../lib/utils"

interface FooterProps {
    className?: string
}

const Footer: React.FC<FooterProps> = ({ className }) => {
    return (
        <footer className={cn("mt-4 ", className)}>
        </footer>
    )
}

export default Footer