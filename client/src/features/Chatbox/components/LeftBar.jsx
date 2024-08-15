function LeftBar(props) {
    const isOpen = props.menuOpen === 1;

    return (
        <div className={`leftbar lg:block ${isOpen ? "block" : "hidden"}`}>
            <p>LeftBar</p>
            <button onClick={() => props.setMenuOpen(0)}>C</button>
        </div>
    );
}

export default LeftBar;
