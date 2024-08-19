function LeftBar(props) {
    const isOpen = props.menuOpen === 1;

    return (
        <div className={`leftbar h-sscreen lg:flex flex-col justify-between ${isOpen ? "flex" : "hidden"}`}>
            <header className="flex justify-between items-center px-4 py-3 bg-slate-700">
                {/* User */}
                <button className="user flex items-center gap-3">
                    <img src="/avatar.svg" alt="avatar icon" className="h-10"/>
                    <span className="text-2xl leading-10 text-zinc-100">John Doe</span>
                    <img src="/three-dots.svg" alt="profile info" className="h-8" />
                </button>

                {/* Return button */}
                <button 
                    className={`lg:hidden ${isOpen ? "block" : "hidden"}`}
                    onClick={() => props.setMenuOpen(0)}
                >
                    <img src="/arrow-right.svg" alt="arrow back" className="h-8" />
                </button>
            </header>
        </div>
    );
}

export default LeftBar;
