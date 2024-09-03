'use client'
import ScrollableMoonsView from "@/client/ScrollableMoonsView";



function Page() {
    return <main className='h-screen overflow-y-auto'>
        <ScrollableMoonsView>
            <div
                className='bg-blue-300 m-12 relative'
            >
                <h2>Track Progress</h2>
                <p>This section will be used to track scroll progress.</p>
            </div>

            <div style={{height: '2000px'}}>
                <p>Scroll down to see the progress...</p>
            </div>
        </ScrollableMoonsView>
    </main>
}

export default Page;
