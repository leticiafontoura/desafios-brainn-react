function Sidebar (props) {

    return (
        <aside>
            <ul>
            {props.menuItems.map(item => (
                <li><a href="/" onClick={(e) => {
                    e.preventDefault();
                    props.handleClick(item.id)
                } }>{item.title}</a></li>
            ))}
            </ul>
        </aside>
    )
}

export default Sidebar;