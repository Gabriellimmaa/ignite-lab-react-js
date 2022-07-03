import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, FileArrowDown, SignIn } from "phosphor-react";
import { useMyGetLessonBySlugQuery } from "../graphql/generated";

interface cardHome {
    title: string;
    img: string;
}

export function CardHome(props: cardHome) {
    return (
        <div className="w-[200px] h-[250px] bg-gray-700 p-6 border-l border-gray-600">
            <div className="gap-8 border-b border-gray-500 block py-2">
                <img src={props.img} />
            </div>
            <div className="font-bold text-lg py-5">
                {props.title}
            </div>
        </div>
    )
}

export function CardLogin() {
    return (
        <div className="w-full bg-gray-700 p-6 border-l border-gray-600 rounded-xl">
            <label>Login:</label>
            <input
                type="text"
                className="input-gray"
                id="exampleFormControlInput1"
                placeholder="Username | Email"
            />
            <label>Password:</label>
            <input
                type="text"
                className="input-gray"
                id="exampleFormControlInput1"
                placeholder="Password"
            />

            <div className="gap-8 border-b border-gray-500 block my-6">
            </div>
            <div className="font-bold text-lg rounded border border-green-700">
                <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch hover:bg-gray-600 transition-colors">
                    <div className="bg-green-700 p-6 flex items-center">
                        <SignIn size={24} />
                    </div>
                    <div className=" p-6 flex items-center">
                        Login
                    </div>
                </a>
            </div>
            <div className="w-full text-center my-3 grid grid-cols-2">
                <a className="cursor-pointer transition-colors hover:text-orange-500 border-r border-gray-500 text-right px-2">Create account</a>
                <a className="cursor-pointer transition-colors hover:text-orange-500 text-left px-2">Forgot password?</a>
            </div>

        </div>
    )
}