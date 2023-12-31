

export default function NavBar (props: {navs: string[]} = {navs: ["one", "two", "three"]}) {

    let navs: JSX.Element[]  = []
    props.navs.forEach((x,i) => {
        navs.push(<div className="cursor-default transition hover:scale-125 pt-4 pb-4 h-full pl-4 pr-4 font-mono text-gray-700 hover:font-bold  transition-colors ease-in duration-400 opacity-100 ">{x}</div>)
        if (i < props.navs.length - 1) {
            navs.push(<div className="pt-4 pb-4 h-full font-mono text-gray-700">|</div>)
        }
    })

    return (
        <main>
            <div className=" mt-5  bg-gray-100 rounded-lg shadow-md flex  border-solid  place-items-center  mr-5 ml-5">
                <div className="basis-2/3">Site</div>
                <div className="flex basis-1/3 gap-10">
                    { navs }
                </div>
            </div>
        </main>
    )
}
