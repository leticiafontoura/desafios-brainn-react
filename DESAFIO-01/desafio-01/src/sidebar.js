import Button from "./button";

function Sidebar () {
    return (
        <aside>
            <p>Para saber mais sobre Bacon Ipsum:</p>
            <Button kind="primary" name="Clique aqui"/>
            <p>Se você é vegano/vegetariano, me perdoe e:</p>
            <Button kind="secondary" name="NÃO clique aqui"/>
        </aside>
    )
}

export default Sidebar;