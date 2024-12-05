import QetraLogo from "@/components/meta/QetraLogo";

export default function Home() {
    return (
        <main className="h-screen w-screen">
            <div className='h-full w-full'>
                <div className='flex justify-center items-center h-full w-full py-12 absolute inset-0 -z-50'> {/* background */}
                    <QetraLogo className={'fill-current text-[#24222A] h-full w-full'}/>
                </div>
                <div className='flex items-center justify-center pt-34'>so, that`s cool, isn`t it?</div>
            </div>
        </main>
    );
}
