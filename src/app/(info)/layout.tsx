import Header from "./header";
import {PropsWithChildren} from "react";

export default function Layout({children}: PropsWithChildren) {
    return <div className="flex flex-col content-stretch h-screen w-screen overflow-hidden">
        <Header/>
        {children}
    </div>
}
