import {useState} from "react";
import Header from "./header";
import Menu from "./menu";
import Sidebar from "./sidebar";
import Content from "./content";
import Footer from "./footer";
import {H2} from "./headings";

function App () {
    const menuItems = [
        {
            id: 1,
            title: "Titulo1",
            body: <p>isso funciona????</p>
        },
        {
            id: 2,
            title: "Titulo2",
            body: <p>isso funciona2????</p>
        },
        {
            id: 3,
            title: "Titulo3",
            body: <p>isso funciona3????</p>
        },
    ]

    const [title, setTitle] = useState(menuItems[0].title);
    const [body, setBody] = useState(menuItems[0].body);

    function handleClick (id) {
        console.log(id);
        const renderPost = menuItems.find(item => (
            item.id === id
        ));
        setTitle(renderPost.title);
        setBody(renderPost.body);
    }

    return (
        <>
        <Header />
        <Menu />
        <Sidebar menuItems={menuItems} handleClick={handleClick}/>
        <Content>
            <H2>{title}</H2>
            {body}
        </Content>
        <Footer />
        </>
    )
}

export default App;