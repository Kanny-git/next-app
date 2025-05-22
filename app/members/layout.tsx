import Sheet from "../_components/Sheet";
import Hero from "../_components/Hero";

type Props = {
  children: React.ReactNode;
};

export default function Rootlayout({ children }: Props) {
  return (
    <>
      <Hero title="Members" sub="メンバー" />
      <Sheet>{children}</Sheet>
    </>
  );
}
