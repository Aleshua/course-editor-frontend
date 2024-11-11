import { Link } from "react-router-dom"
import { cn } from "../../lib/utils"

import { Button } from "../ui/button"
import LoginModal from "./login-modal"
import RegModal from "./reg-modal"

interface HeaderProps {
    className?: string
}

const Header: React.FC<HeaderProps> = ({ className }) => {
    return (
        <header className="sticky top-0 bg-white w-full border-b">

            <div className={cn("flex items-center justify-between", className)}>

                {/*Title and Logo*/}
                <Link to={"/"}>
                    <p className="text-[24px]">Editor</p>
                </Link>

                {/* */}
                <div className="flex gap-x-4">
                    <Button className="" variant={"linkBlack"}>Документация</Button>
                    <RegModal />
                    <LoginModal />
                </div>
            </div>

        </header>
    )
}

export default Header
