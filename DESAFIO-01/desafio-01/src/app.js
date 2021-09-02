import Header from "./header";
import Menu from "./menu";
import Sidebar from "./sidebar";
import Content from "./content";
import Footer from "./footer";
import {H1, H2, H3, H4, H5, H6} from "./headings";
import Button from "./button";

function App () {
    return (
        <>
        <Header>
            <H1>Bacon Ipsum</H1>
        </Header>
        <Menu>
            <ul>
                <li>Quem somos</li>
                <li>O que fazemos</li>
                <li>Contate-nos</li>
            </ul>
        </Menu>
        <Sidebar>
            <p>Caso queira saber mais sobre bacon ipsum:</p>
            <Button kind="primary">Clique aqui</Button>
            <p>Se você não consome carnes:</p>
            <Button kind="secondary">Clique aqui</Button>
        </Sidebar>
        <Content>
            <H2>Prosciutto Cupim</H2>
            <p>Rump shankle t-bone ham hock tri-tip tail short loin pancetta prosciutto. Pastrami tenderloin chicken ham ball tip buffalo cow jerky leberkas ground round boudin landjaeger flank.</p>        

            <H3>Hamburger burgdoggen</H3>
            <p>Turkey swine leberkas pork bresaola. Bresaola capicola meatloaf burgdoggen, pork loin cupim tail cow shankle tri-tip. Sirloin burgdoggen pork chop fatback. Meatball cow pork meatloaf short ribs. </p>

            <H3>Flank jerky tail</H3>
            <p>Pork loin pork chop meatloaf sausage, drumstick filet mignon alcatra pork strip steak buffalo chicken doner bacon fatback hamburger. Turkey frankfurter pig, short loin ham hock spare ribs rump brisket boudin swine pork belly cupim doner tri-tip pancetta.</p>

            <H3>Flank jerky tail</H3>
            <p>Pork loin pork chop meatloaf sausage, drumstick filet mignon alcatra pork strip steak buffalo chicken doner bacon fatback hamburger. Turkey frankfurter pig, short loin ham hock spare ribs rump brisket boudin swine pork belly cupim doner tri-tip pancetta.</p>

            <H3>Flank jerky tail</H3>
            <p>Pork loin pork chop meatloaf sausage, drumstick filet mignon alcatra pork strip steak buffalo chicken doner bacon fatback hamburger. Turkey frankfurter pig, short loin ham hock spare ribs rump brisket boudin swine pork belly cupim doner tri-tip pancetta.</p>
        </Content>
        <Footer>
            <H5>Desenvolvido com amor (e uma pitada de ódio) por Letícia Fontoura</H5>
        </Footer>
        </>
    )
}

export default App;