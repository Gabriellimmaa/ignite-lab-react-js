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
            <main className="h-full my-5">
                <div className="grid grid-cols-3 gap-4 max-w-[1440px] mx-auto">
                    <div className="col-auto flex h-scree items-center w-full">
                        <div className="col-auto m-auto w-[350px] h-[450px]">
                            <CardLogin></CardLogin>
                        </div>
                    </div>
                    <div className="col-span-2 flex justify-center border-l border-gray-300 py-10">
                        <div className="grid grid-cols-4 gap-4">
                            <div className="col-auto flex justify-center"><CardHome title="Design" img="src\resources\home\design.png" /></div>
                            <div className="col-auto flex justify-center"><CardHome title="Desenvolvimento" img="img" /></div>
                            <div className="col-auto flex justify-center"><CardHome title="Marketing" img="img" /></div>
                            <div className="col-auto flex justify-center"><CardHome title="TI e Software" img="img" /></div>

                            <div className="col-auto flex justify-center"><CardHome title="Negócios" img="img" /></div>
                            <div className="col-auto flex justify-center"><CardHome title="Fotografia" img="img" /></div>
                            <div className="col-auto flex justify-center"><CardHome title="Música" img="img" /></div>
                            <div className="col-auto flex justify-center"><CardHome title="DevOps" img="img" /></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}