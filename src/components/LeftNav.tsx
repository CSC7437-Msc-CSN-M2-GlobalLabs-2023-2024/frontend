


const LeftNav = () => {

    return(
        <aside className="left-0 flex flex-col h-full w-full p-4 z-40 bg-white drop-shadow-md bg-opacity-30 gap-4 backdrop-blur-md content-center">
            <div className="flex p-2 bg-slate-300 rounded-sm cursor-pointer place-content-center hover:bg-slate-400">Dashboard</div>
            <div className="flex p-2 bg-slate-300 rounded-sm cursor-pointer place-content-center hover:bg-slate-400">Processes</div>
            <div className="flex p-2 bg-slate-300 rounded-sm cursor-pointer place-content-center hover:bg-slate-400">Doctors</div>
            <div className="flex p-2 bg-slate-300 rounded-sm cursor-pointer place-content-center hover:bg-slate-400">Patients</div>

        </aside>
    )
}

export default LeftNav