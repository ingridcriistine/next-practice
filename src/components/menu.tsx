import Link from "next/link"

import { ROUTES } from "@/constants/routes"

interface IMenu {
    op1: string,
    op2: string,
    op3: string
}

const Menu: React.FC<IMenu> = ({op1, op2, op3}) => {
    return (
        <nav className="text-preto bg-cyan-700 justify-evenly p-3 fixed w-full z-10 font-robFont text-large flex flex-row align-center gap-8">
            <Link href={ROUTES.login}>{op1}</Link>
            <Link href={ROUTES.home}>{op2}</Link>
            <Link href={ROUTES.cards}>{op3}</Link>
        </nav>
    )
}

export default Menu