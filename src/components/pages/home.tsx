import ContentPlug from "../shared/content-plug"
import Footer from "../shared/footer"
import Header from "../shared/header"
// import TutorialModal from "../shared/tutorial-modal"


function Home() {

    return (
        <main className="flex flex-col min-h-screen bg-secondary font-robotoFlex">
            <Header className="mx-auto w-2/3 h-16" />

            {/* <TutorialModal /> */}
            <ContentPlug className="flex-grow" />

            <Footer className="h-32 bg-neutral-600" />
        </main>
    )
}

export default Home
