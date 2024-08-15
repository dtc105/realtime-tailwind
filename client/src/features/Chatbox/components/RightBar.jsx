function RightBar(props) {
    const isOpen = props.menuOpen === 2;

    return (
        <div className={`rightbar lg:block ${isOpen ? "block" : "hidden"}`}>
            <p>RightBar</p>
            <button onClick={() => props.setMenuOpen(0)}>C</button>
        </div>
    );
}

export default RightBar;
