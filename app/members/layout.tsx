import Sheet from "../_componetnts/Sheet"
import Hero from "../_componetnts/Hero"

type Props = {
    children: React.ReactNode;
}

export default function Rootlayout({ children }: Props) {
    return (
        <>
            <Hero title="Members" sub="メンバー" />
            <Sheet>{children}</Sheet>
        </>
    )
}