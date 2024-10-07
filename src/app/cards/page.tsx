'use client'

// import { Metadata } from "next";
import { useEffect, useState, Suspense } from "react";

interface IData {
    cep: string,
    estado: string
}

// export const metadata: Metadata = {
//     title: "Cards",
//     description: "Teste cards",
// };

const Cards = () => {

    const [data, setData] = useState<IData[]>([])

    useEffect(() => {
        const load = async () => {
            const ceps = ['01001000', '80060150', '01011000']
            const requests = ceps.map(cep => fetch(`https://viacep.com.br/ws/${cep}/json/`))
            const responses = await Promise.all(requests)
            const data = await Promise.all(responses.map(res => res.json()))
            setData(data);
            console.log(data)
        }
        load()
    }, [])

    return(
        <div>
            <h1>CEPS</h1>
            {data.map((item, index) => {
                return(
                    <div key={index}>
                        <h2>{item.cep}</h2>
                        <p>{item.estado}</p>
                    </div>
                )
            })}
        </div>
    )

}

export default Cards