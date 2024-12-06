import {PropsWithChildren} from "react";

export default function SectionTitle({children}: PropsWithChildren) {
    return <div className='font-semibold text-center text-6xl'>
        {children}
    </div>
}
