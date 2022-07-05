import { useParams } from "react-router-dom";
import { CardHome, CardLogin } from "../components/CardHome";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";


export function Home() {

    // const { slug } = useParams<{ slug: string }>()

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="h-full md:my-5 my-32 mx-10">
                <div className="grid grid-cols-3 gap-4 max-w-[1440px] mx-auto">
                    <div className="flex h-scree items-center w-full col-span-3 md:col-auto">
                        <div className="col-auto m-auto w-[350px] h-[450px] py-10">
                            <CardLogin></CardLogin>
                        </div>
                    </div>
                    <div className="col-span-2 d-non justify-center border-l border-gray-300 py-10 hidden md:flex">
                        <div className="grid grid-cols-4 gap-4 mx-4">
                            <div className="col-auto flex justify-center"><CardHome title="React" img="public\assets\icons\design.png" /></div>
                            <div className="col-auto flex justify-center"><CardHome title="Next" img="public\assets\icons\design.png" /></div>
                            <div className="col-auto flex justify-center"><CardHome title="Vite" img="public\assets\icons\design.png" /></div>
                            <div className="col-auto flex justify-center"><CardHome title="Typescript" img="public\assets\icons\design.png" /></div>
                            <div className="col-auto flex justify-center"><CardHome title="Node" img="public\assets\icons\design.png" /></div>
                            <div className="col-auto flex justify-center"><CardHome title="API" img="public\assets\icons\design.png" /></div>
                            <div className="col-auto flex justify-center"><CardHome title="HTML" img="public\assets\icons\html.png" /></div>
                            <div className="col-auto flex justify-center"><CardHome title="CSS" img="public\assets\icons\css.png" /></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}