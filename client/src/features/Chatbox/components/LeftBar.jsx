function LeftBar(props) {
    const isOpen = props.menuOpen === 1;

    return (
        <header className={`leftbar lg:block ${isOpen ? "block" : "hidden"}`}>
            {/* User */}
            <div className="user">
                <img src="/avatar.svg" alt="avatar icon" />
                <span>John Doe</span>
            </div>

            {/* Return button */}
            <button 
                className={`lg:hidden ${isOpen ? "block" : "hidden"}`}
                onClick={() => props.setMenuOpen(0)}
            >
                <img src="/arrow-right.svg" alt="arrow back" />
            </button>
        </header>
    );
}

export default LeftBar;
