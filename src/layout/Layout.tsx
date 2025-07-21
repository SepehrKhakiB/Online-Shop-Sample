import Navbar from "../component/Navbar/Navbar"

interface Layout {
    children: React.ReactNode
}


function Layout({ children }: Layout) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default Layout