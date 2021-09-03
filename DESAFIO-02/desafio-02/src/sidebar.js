import Button from "./button";

function Sidebar () {
    return (
        <aside>
            
             <p>Caso queira saber mais sobre bacon ipsum:</p>
            <Button kind="primary">Clique aqui</Button>
            <p>Se você não consome carnes:</p>
            <Button kind="secondary">Clique aqui</Button>
        </aside>
    )
}

export default Sidebar;