import Hero from "../_componetnts/Hero";
import Sheet from "../_componetnts/Sheet";

type Props = 
    {
        children: React.ReactNode;
    }

export default function NewsLayout({ children }: Props) {
    return (
        <>
            <Hero title="News" sub="ニュース" />
            <Sheet>{children}</Sheet>
        </>
        )
    }