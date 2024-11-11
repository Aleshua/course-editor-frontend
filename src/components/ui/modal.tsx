import { cn } from "../../lib/utils"

import { ModalProvider, useModal } from "../contexts/modal-context"
import Portal from "./portal"

import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
    children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ children }) => {
    return (
        <ModalProvider>
            {children}
        </ModalProvider>
    )
}


interface ModalTriggerProps {
    className?: string
    children: React.ReactNode
}

export const ModalTrigger: React.FC<ModalTriggerProps> = ({ className, children }) => {
    const { openModal } = useModal();

    return (
        <div className={cn("", className)} onClick={openModal}>
            {children}
        </div>
    )
}

interface ModalContentProps {
    className?: string
    children: React.ReactNode
}

export const ModalContent: React.FC<ModalContentProps> = ({ className, children }) => {
    const { isOpen, closeModal } = useModal();

    return (
        <>
            {isOpen && (<Portal>
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 w-full h-full">
                    <div className={cn("relative bg-white rounded-md shadow-lg p-2", className)}>
                        <button className="absolute right-2 top-2 size-4" onClick={closeModal}>
                            <AiOutlineClose className="size-full" />
                        </button>
                        {children}
                    </div>
                </div>
            </Portal>)}
        </>
    );
};