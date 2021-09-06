import {useState} from "react";
import Header from "./header";
import Menu from "./menu";
import Sidebar from "./sidebar";
import Content from "./content";
import Footer from "./footer";
import {H2, H3} from "./headings";

function App () {
    const postsItems = [
        {
            id: 1,
            title: "Chester Cheddar",
            body: <>
            <p>Data de nascimento: março de 2019</p>
            <p>Nome completo: Chester Cheddar Fontoura Wolff</p>
            <p>Apelidos: Cheche, Chechinho, Chechezinho fiadaputa, Chechitos, gato vagabundo</p>
            <H3>História</H3>
            <p>O Cheche foi achado pela avó do meu marido (Daniel), no quintal de sua casa. Muito provavelmente alguém o jogou pelo portão.</p>
            <p>O Daniel estava viajando a trabalho quando recebi uma mensagem da irmã dele perguntando se nós queríamos adotar um gatinho. Eu nem pensei duas vezes, já respondi que sim e em seguida mandei uma mensagem pra ele: "agora temos um gato".</p>
            <p>Desde então, Cheche mudou as nossas vidas com o jeito único dele de ser.</p>
            </>
        },
        {
            id: 2,
            title: "Laranjo Juba",
            body: <>
            <p>Data de nascimento: fevereiro de 2020</p>
            <p>Nome completo: Laranjo Juba Fontoura Wolff</p>
            <p>Apelidos: Laranjo, Orangino, Laranjitos, Laranjinho, gato precioso</p>
            <H3>História</H3>
            <p>Eu sempre quis ter um gato laranja. Um dia, no grupo do condomínio onde morávamos em SP, alguém mandou a foto de um gatinho todo mirrado para adoração. Ele era laranja. Eu nem pensei duas vezes (de novo): já pedi o contato da pessoa que estava cuidando e disse que eu queria ele pra mim.</p>
            <p>Chamei o Daniel, mostrei a foto e falei "agora ele é nosso, ele se chama Laranjo". Daniel ficou meio ressabiado no começo, porque ele e o Cheche eram um grude só, e ele tinha um pouco de medo de não conseguir amar o Laranjo igual ama o Cheche (eu lembro disso e dou risada).</p>
            <p>O Laranjinho chegou para nós e quase cabia na palma da mão de tão pequenuxo. Nos dois primeiros dias, ele ficava em quarto separado do Cheche. A interação dos dois foi muito bem mediada por nós, para evitar traumas - afinal, os dois seriam irmãos.</p>
            <p>Cerca de uma semana depois, os dois já começaram a dormir juntos e, desde então, são inseparáveis. Mesmo com personalidades bem diferentes, o Laranjo foi a melhor coisa que aconteceu pro Cheche - e vice-versa. Inseparáveis. Os melhores irmãos que poderiam existir.</p>
            </>
        },
        {
            id: 3,
            title: "Carmelita Consuela",
            body: <>
            <p>Data de nascimento: junho de 2020</p>
            <p>Nome completo: Carmelita Consuela Fontoura Wolff</p>
            <p>Apelidos: Carmelora, Carmelosa, Furacão Carmelita, Carmequina Joanota e por aí vai...</p>
            <H3>História</H3>
            <p>Eu sempre tive cachorro em casa, a vida inteira. Mesmo com os meus dois meninos, eu sentia que algo estava faltando.</p>
            <p>O fato de morar em apartamento foi sempre um impeditivo pra mim, até que nos mudamos de volta para Campinas, em um apartamento bem mais espaçoso. Isso me deu esperanças de conseguir convencer o Daniel a adotarmos um doguinho dessa vez. Não foi lá muito fácil, mas eu consegui.</p>
            <p>Enquanto navegava por instagram de ongs, procurando pelo dog que fizesse meu coração derreter, encontrei uma foto de um cachorrinho bem pequenininho, de gravatinha, do lado de um vaso de plantas. Era a Carmelita - que na época atendia por "Maybe". Eu me apaixonei, perdidamente.</p>
            <p>Ela estava em um lar temporário em São Paulo e, uns três dias depois, chegou para nós. Ela era menor que o Cheche. Haviam me dito que ela seria porque pequeno/médio. Aiai...</p>
            <p>Hoje, na data que escrevo isso, está próximo de completar um ano que a Carmelita chegou. Atualmente com 12kg, com a energia de mil usinas nucleares, e definitivamente não ficou porte pequeno/médio. Ela é o nosso furacão. Se dá bem com o Cheche (de vez em quando ele bate nela xD), mas com o Laranjito ainda está no processo de adaptação (sim, quase um ano depois). O Cheche é sociável, o Laranjo é medroso. Hoje em dia ele tolera ficar no mesmo ambiente que ela, o que a gente já considera uma vitória!</p>
            </>
        },
    ]

    const [title, setTitle] = useState(postsItems[0].title);
    const [body, setBody] = useState(postsItems[0].body);

    function handleClick (id) {
        console.log(id);
        const renderPost = postsItems.find(item => (
            item.id === id
        ));
        setTitle(renderPost.title);
        setBody(renderPost.body);   
    }

    return (
        <>
        <Header />
        <Menu />
        <Sidebar postsItems={postsItems} handleClick={handleClick}/>
        <Content>
            <article>
                <H2>{title}</H2>
                {body}
            </article>
        </Content>
        <Footer />
        </>
    )
}

export default App;