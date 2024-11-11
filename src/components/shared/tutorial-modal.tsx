import { Modal, ModalContent, ModalTrigger } from "../ui/modal"
import { Button } from "../ui/button"


const TutorialModal: React.FC = () => {

    return (
        <Modal>
            <ModalTrigger>
                <Button className="" variant={"outline"}>Tutorial</Button>
            </ModalTrigger>
            <ModalContent>
                <div className="w-[560px]">
                    <span className="flex flex-col w-full">
                        <p>1. Вставьте этот фрагмент в раздел кода страницы:</p>
                        <span className="pl-4 w-full h-32 bg-secondary rounded-sm">
                            <p className="p-2">
                                &lt;script&gt;
                                (function (d, s, eID) {"{"}
                                var e = d.getElementById(eID);
                                j = d.createElement(s);
                                j.async = true;
                                j.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-T32BB5J2';
                                e.appendChild(j);
                                {"}"}(document, 'script', 'editor-root'))
                                &lt;/script&gt;
                            </p>
                        </span>
                    </span>
                </div>
            </ModalContent>
        </Modal>
    )
}

export default TutorialModal
