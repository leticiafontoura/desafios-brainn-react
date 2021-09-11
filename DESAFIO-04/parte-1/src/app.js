import {useState} from "react";
import * as S from "./styled"
import Carmelita from "./carmelita.jpeg"
import Cheche from "./cheche.jpeg"
import Laranjo from "./laranjo.jpeg"

const postsItems = [
    {
        id: 1,
        title: "Chester Cheddar",
        body: <>
        <S.Paragraph>Data de nascimento: março de 2019</S.Paragraph>
        <S.Paragraph>Nome completo: Chester Cheddar Fontoura Wolff</S.Paragraph>
        <S.Paragraph>Apelidos: Cheche, Chechinho, Chechezinho fiadaputa, Chechitos, gato vagabundo</S.Paragraph>
        <S.H3>História</S.H3>
        <S.Paragraph>O Cheche foi achado pela avó do meu marido (Daniel), no quintal de sua casa. Muito provavelmente alguém o jogou pelo portão.</S.Paragraph>
        <S.Paragraph>O Daniel estava viajando a trabalho quando recebi uma mensagem da irmã dele perguntando se nós queríamos adotar um gatinho. Eu nem pensei duas vezes, já respondi que sim e em seguida mandei uma mensagem pra ele: "agora temos um gato".</S.Paragraph>
        <S.Image src={Cheche} alt="foto de um gatinho cinza"></S.Image>
        <S.Paragraph>Desde então, Cheche mudou as nossas vidas com o jeito único dele de ser.</S.Paragraph>
        </>
    },
    {
        id: 2,
        title: "Laranjo Juba",
        body: <>
        <S.Paragraph>Data de nascimento: fevereiro de 2020</S.Paragraph>
        <S.Paragraph>Nome completo: Laranjo Juba Fontoura Wolff</S.Paragraph>
        <S.Paragraph>Apelidos: Laranjo, Orangino, Laranjitos, Laranjinho, gato precioso</S.Paragraph>
        <S.H3>História</S.H3>
        <S.Paragraph>Eu sempre quis ter um gato laranja. Um dia, no grupo do condomínio onde morávamos em SP, alguém mandou a foto de um gatinho todo mirrado para adoração. Ele era laranja. Eu nem pensei duas vezes (de novo): já pedi o contato da pessoa que estava cuidando e disse que eu queria ele pra mim.</S.Paragraph>
        <S.Paragraph>Chamei o Daniel, mostrei a foto e falei "agora ele é nosso, ele se chama Laranjo". Daniel ficou meio ressabiado no começo, porque ele e o Cheche eram um grude só, e ele tinha um pouco de medo de não conseguir amar o Laranjo igual ama o Cheche (eu lembro disso e dou risada).</S.Paragraph>
        <S.Paragraph>O Laranjinho chegou para nós e quase cabia na palma da mão de tão pequenuxo. Nos dois primeiros dias, ele ficava em quarto separado do Cheche. A interação dos dois foi muito bem mediada por nós, para evitar traumas - afinal, os dois seriam irmãos.</S.Paragraph>
        <S.Image src={Laranjo} alt="foto de um gatinho laranja"></S.Image>
        <S.Paragraph>Cerca de uma semana depois, os dois já começaram a dormir juntos e, desde então, são inseparáveis. Mesmo com personalidades bem diferentes, o Laranjo foi a melhor coisa que aconteceu pro Cheche - e vice-versa. Inseparáveis. Os melhores irmãos que poderiam existir.</S.Paragraph>
        </>
    },
    {
        id: 3,
        title: "Carmelita Consuela",
        body: <>
        <S.Paragraph>Data de nascimento: junho de 2020</S.Paragraph>
        <S.Paragraph>Nome completo: Carmelita Consuela Fontoura Wolff</S.Paragraph>
        <S.Paragraph>Apelidos: Carmelora, Carmelosa, Furacão Carmelita, Carmequina Joanota e por aí vai...</S.Paragraph>
        <S.H3>História</S.H3>
        <S.Paragraph>Eu sempre tive cachorro em casa, a vida inteira. Mesmo com os meus dois meninos, eu sentia que algo estava faltando.</S.Paragraph>
        <S.Paragraph>O fato de morar em apartamento foi sempre um impeditivo pra mim, até que nos mudamos de volta para Campinas, em um apartamento bem mais espaçoso. Isso me deu esperanças de conseguir convencer o Daniel a adotarmos um doguinho dessa vez. Não foi lá muito fácil, mas eu consegui.</S.Paragraph>
        <S.Paragraph>Enquanto navegava por instagram de ongs, procurando pelo dog que fizesse meu coração derreter, encontrei uma foto de um cachorrinho bem pequenininho, de gravatinha, do lado de um vaso de plantas. Era a Carmelita - que na época atendia por "Maybe". Eu me apaixonei, perdidamente.</S.Paragraph>
        <S.Paragraph>Ela estava em um lar temporário em São Paulo e, uns três dias depois, chegou para nós. Ela era menor que o Cheche. Haviam me dito que ela seria porque pequeno/médio. Aiai...</S.Paragraph>
        <S.Image src={Carmelita} alt="foto de uma cachorrinha preta"></S.Image>
        <S.Paragraph>Hoje, na data que escrevo isso, está próximo de completar um ano que a Carmelita chegou. Atualmente com 12kg, com a energia de mil usinas nucleares, e definitivamente não ficou porte pequeno/médio. Ela é o nosso furacão. Se dá bem com o Cheche (de vez em quando ele bate nela xD), mas com o Laranjito ainda está no processo de adaptação (sim, quase um ano depois). O Cheche é sociável, o Laranjo é medroso. Hoje em dia ele tolera ficar no mesmo ambiente que ela, o que a gente já considera uma vitória!</S.Paragraph>
        </>
    },
]

const menuItems = [
    {
        id: 4,
        title: "Quem sou eu",
        content: <>
            <S.Paragraph>Olá, eu sou a Letícia. Tenho 27 anos e estou há 2 anos e pouquinho estudando programação.</S.Paragraph>
            <S.Paragraph>Sou "mãe" dos três bichinhos adoráveis em que conto a história aqui.</S.Paragraph>
        </>
    },
    {
        id: 5,
        title: "O que é isso aqui",
        content: <>
            <S.Paragraph>Esse é um blog desenvolvido como parte do bootcamp de React promovido pela Brainn Academy.</S.Paragraph>
        </>
    }
]

function App () {
   
    const [title, setTitle] = useState(postsItems[0].title);
    const [body, setBody] = useState(postsItems[0].body);
    const [menuTitle, setMenuTitle] = useState(null);
    const [menuContent, setMenuContent] = useState(null)

    function handleClick (id) {
        setMenuContent(null);
        setMenuTitle(null);
        const renderPost = postsItems.find(item => (
            item.id === id
        ));
        setTitle(renderPost.title);
        setBody(renderPost.body);   
    }

    function handleMenuClick (id) {
        setBody(null);
        setTitle(null);
        const renderMenu = menuItems.find(item => (
            item.id === id
        ));
        setMenuTitle(renderMenu.title);
        setMenuContent(renderMenu.content)
    }

    return (
        <>
        <S.GlobalStyle />
        <S.Header><S.H1>Pets, pets, pets</S.H1></S.Header>
        <S.Menu>
            <S.List>
                {menuItems.map(item => (
                    <S.Item key={item.id} cursor="no-drop" display="inline-block"><S.Link href="/" onClick={(e) => {
                        e.preventDefault();
                        handleMenuClick(item.id)
                    }}>{item.title}</S.Link></S.Item>
                ))}
            </S.List>
        </S.Menu>
        <S.Sidebar postsItems={postsItems} handleClick={handleClick}>
            <S.H2>Artigos</S.H2>
                <S.List>
                {postsItems.map(item => (
                    <S.Item cursor="auto" display="block" key={item.id}><S.Link href="/" onClick={(e) => {
                        e.preventDefault();
                        handleClick(item.id)
                    } }>{item.title}</S.Link></S.Item>
                ))}
                </S.List>
        </S.Sidebar>
        <S.Content>
            <S.Post>
                <S.H2>{title || menuTitle}</S.H2>
                {body || menuContent}
            </S.Post>
            
        </S.Content>
        <S.Footer><S.H5>Desenvolvido com amor (e uma pitada de ódio) por Letícia Fontoura</S.H5></S.Footer>
        </>
    )
}

export default App;