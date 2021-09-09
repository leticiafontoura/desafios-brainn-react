import {useEffect, useState} from "react";

function Cars () {
    
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
                    color: color
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
                        color: color
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
        <form data-js="cars-form" className="cars-form" onSubmit={handleForm} >
            <p>
                <label htmlFor="car-image">Imagem:</label>
                <input onChange={(e) => setImage(e.target.value)}required type="text" id="car-image" name="carImage" data-js="car-image" placeholder="Ex: URLdaImagem.png" value={image} />
            </p>
            <p>
                <label htmlFor="car-make-model">Marca/modelo:</label>
                <input onChange={(e) => setMake(e.target.value)}required type="text" id="car-make-model" name="car-make-model" data-js="car-make-model"
                    placeholder="Ex: Fiat/Argo" value={make}/>
            </p>
            <p>
                <label htmlFor="car-year">Ano:</label>
                <input onChange={(e) => setYear(e.target.value)}required type="number" id="car-year" name="car-year" data-js="car-year" placeholder="Ex: 1999" value={year}/>
            </p>
            <p>
                <label htmlFor="car-license-plate">Placa:</label>
                <input onChange={(e) => setPlate(e.target.value)}required pattern="[A-Z]{3}[-][0-9]{4}" type="text" id="car-license-plate" name="car-license-plate"
                    data-js="car-license-plate" placeholder="Formato ABC-1234" value={plate}/>
            </p>
            <p>
                <label htmlFor="car-color">Cor:</label>
                <input onChange={(e) => setColor(e.target.value)}required type="text" id="car-color" name="car-color" data-js="car-color" placeholder="Ex: preto" value={color} />
            </p>
            <p>
                <button type="submit" data-js="submit-btn" className="submit-btn">Cadastrar 🚗</button>
            </p>
        </form>
        <UserMessage delMsg={userMsg} setDelMsg={setUserMsg}/>
        <Table carsObj={carsObj} handleDelete={handleDelete} delMsg={userMsg}/>
        </>
    )

}

function UserMessage({delMsg, setDelMsg}) {

    useEffect(() => {
        const id = setTimeout(() => {
            setDelMsg("")
        }, 3000)

        return () => clearInterval(id)
    })
    
    return (
        <div>{delMsg}</div>
    )
}

function Table ({carsObj, handleDelete}) {


    return (
        <table>
            <thead>
                <tr>
                <th>Imagem</th>
                <th>Marca</th>
                <th>Ano</th>
                <th>Placa</th>
                <th>Cor</th>
                <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                {carsObj.length === 0 ? <tr>
                    <td colSpan="6">Nenhum carro cadastrado</td>
                </tr>
                :
                carsObj.map((car) => {
                    return (
                    <>
                    <tr>
                        <td><img src={car.image} alt={car.brandModel} width="130" height="auto"/></td>
                        <td>{car.brandModel}</td>
                        <td>{car.year}</td>
                        <td>{car.plate}</td>
                        <td>{car.color}</td>
                        <td><button className="del-btn" data-js="del-btn" alt="excluir" onClick={() => {
                            handleDelete(car.plate)
                        }}>Deletar</button></td>
                    </tr>
                   
                    </>
                    )
                })
                }
            </tbody>
        </table>
    )
}

export default Cars