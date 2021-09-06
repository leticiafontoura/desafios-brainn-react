import {H2} from "./headings"

function Sidebar (props) {

    return (
        <aside>
            <H2>Artigos</H2>
            <ul>
            {props.postsItems.map(item => (
                <li key={item.id}><a href="/" onClick={(e) => {
                    e.preventDefault();
                    props.handleClick(item.id)
                } }>{item.title}</a></li>
            ))}
            </ul>
        </aside>
    )
}

export default Sidebar;