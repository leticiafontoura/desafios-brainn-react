import Button from "./button";

function Sidebar () {

    const menuItems = [
        {
            id: 1,
            title: <h1>Titulo</h1>,
            content: <p>isso funciona????</p>
        },
        {
            id: 2,
            title: <h1>Titulo2</h1>,
            content: <p>isso funciona2????</p>
        },
    ]

    return (
        <aside>
            <ul>
            {menuItems.map(item => (
                <li><a href="#">{item.title}</a></li>
            ))}
            </ul>
        </aside>
    )
}

export default Sidebar;