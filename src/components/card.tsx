interface ICard {
    cep: string,
    estado: string
}

export const Card: React.FC<ICard> = ({cep, estado}) => {
    return (
        <div>
            <h1>CEP</h1>
            <h2>{cep}</h2>
            <p>{estado}</p>
        </div>
    )
}