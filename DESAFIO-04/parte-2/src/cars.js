import {useEffect, useState} from "react";
import * as S from "./styled";

function Cars () {
    
    console.log("montado")

    const [image, setImage] = useState("");
    const [make, setMake] = useState("");
    const [year, setYear] = useState("");
    const [plate, setPlate] = useState("");
    const [color, setColor] = useState("");
    const [userMsg, setUserMsg] = useState(undefined);
    const [carsObj, setCarsObj] = useState([]);

    useEffect(() => {
       const imageInput = document.querySelector("[data-js='car-image']");
       imageInput.focus();
    },[])

    useEffect(() => {
        async function getCars() {
            const response = await fetch("http://localhost:3333/cars");
            const carsData = await response.json();
            if (carsData.length > 0) {
                setCarsObj(carsData);
            }
        }
        getCars();
    }, [])

    useEffect(() => {
        const id = setTimeout(() => {
            setUserMsg("")
        }, 3000)

        return () => clearTimeout(id)
    })

    function handleDelete(carPlate) {
        async function deleteCars() {
            const response = await fetch("http://localhost:3333/cars", {
                method: "delete",
                body: JSON.stringify({
                    plate: carPlate,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }});
                const delJson = await response.json();
                setUserMsg(delJson.message);
                setCarsObj((prevState) => prevState.filter((car) => car.plate !== carPlate))
        }
        
        deleteCars();
            
    }

    function handleForm(e) {
        e.preventDefault();
        async function postCars() {
            const response = await fetch("http://localhost:3333/cars", {
                method: "POST",
                body: JSON.stringify({
                    image: image,
                    brandModel: make,
                    year: year,
                    plate: plate,
                    color: color,
                }),
                headers: {
                "Content-type": "application/json; charset=UTF-8"
                }});
    
                const postResponse = await response.json();

                if (postResponse.error === true) {
                    setUserMsg(postResponse.message)
                    return
                }

                setUserMsg(postResponse.message)

                setCarsObj([
                    ...carsObj,
                    {
                        image: image,
                        brandModel: make,
                        year: year,
                        plate: plate,
                        color: color,
                    }
                ])
            }

        postCars();
        setImage("");
        setMake("");
        setYear("");
        setPlate("");
        setColor("");
        e.target.elements.carImage.focus();
    }


    return (
        <>
        <S.GlobalStyle />
        <S.Form data-js="cars-form" className="cars-form" onSubmit={handleForm} >
            <S.Paragraph>
                <S.Label htmlFor="car-image">Imagem:</S.Label>
                <S.Input onChange={(e) => setImage(e.target.value)} required type="text" id="car-image" name="carImage" data-js="car-image" placeholder="Ex: URLdaImagem.png" value={image} />
            </S.Paragraph>
            <S.Paragraph>
                <S.Label htmlFor="car-make-model">Marca/modelo:</S.Label>
                <S.Input onChange={(e) => setMake(e.target.value)} required type="text" id="car-make-model" name="car-make-model" data-js="car-make-model"
                    placeholder="Ex: Fiat/Argo" value={make}/>
            </S.Paragraph>
            <S.Paragraph>
                <S.Label htmlFor="car-year">Ano:</S.Label>
                <S.Input onChange={(e) => setYear(e.target.value)} required type="number" id="car-year" name="car-year" data-js="car-year" placeholder="Ex: 1999" value={year}/>
            </S.Paragraph>
            <S.Paragraph>
                <S.Label htmlFor="car-license-plate">Placa:</S.Label>
                <S.Input onChange={(e) => setPlate(e.target.value)} required pattern="[A-Z]{3}[-][0-9]{4}" type="text" id="car-license-plate" name="car-license-plate"
                    data-js="car-license-plate" placeholder="Formato ABC-1234" value={plate}/>
            </S.Paragraph>
            <S.Paragraph>
                <S.Label htmlFor="car-color">Cor:</S.Label>
                <S.Input onChange={(e) => setColor(e.target.value)} required type="text" id="car-color" name="car-color" data-js="car-color" placeholder="Ex: preto" value={color} />
            </S.Paragraph>
            <S.Paragraph>
                <S.Button type="submit" data-js="submit-btn">Cadastrar 🚗</S.Button>
            </S.Paragraph>
        </S.Form>
       { userMsg !== "" ? <S.UserMsg>{userMsg}</S.UserMsg> : <></>}
        <Table carsObj={carsObj} handleDelete={handleDelete} userMsg={userMsg}/>
        </>
    )
}

function Table ({carsObj, handleDelete}) {

    return (
        <S.Table>
            <S.THead>
                <S.Tr>
                <S.Th>Imagem</S.Th>
                <S.Th>Marca</S.Th>
                <S.Th>Ano</S.Th>
                <S.Th>Placa</S.Th>
                <S.Th>Cor</S.Th>
                <S.Th>Ação</S.Th>
                </S.Tr>
            </S.THead>
            <S.TBody>
                {carsObj.length === 0 ? <S.Tr>
                    <S.Td colSpan="6">Nenhum carro cadastrado</S.Td>
                </S.Tr>
                :
                carsObj.map((car, index) => {
                    return (
                    <S.Tr>
                        <S.Td key={index + (Math.random() * 1)}><S.Img src={car.image} alt={car.brandModel} /></S.Td>
                        <S.Td key={index + (Math.random() * 1)}>{car.brandModel}</S.Td>
                        <S.Td key={index + (Math.random() * 1)}>{car.year}</S.Td>
                        <S.Td key={index + (Math.random() * 1)}>{car.plate}</S.Td>
                        <S.Td key={index + (Math.random() * 1)}>{car.color}</S.Td>
                        <S.Td key={index + (Math.random() * 1)}><S.Button data-js="del-btn" alt="excluir" onClick={() => {
                            handleDelete(car.plate)
                        }}>Deletar 🗑️</S.Button></S.Td>
                    </S.Tr>
                    )
                })
                }
            </S.TBody>
        </S.Table>
    )
}

export default Cars