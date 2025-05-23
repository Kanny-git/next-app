import Article from "@/app/_components/Article";
import { getNewsDetail } from "@/app/_libs/microcms";
import ButtonLink from "@/app/_components/ButtonLink";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string
  };
  searchParams: {
    dk?: { [key: string]: string | string[] | undefined };
  };
};

export default async function Page({ params, searchParams }: Props) {
  const draftKey =
    typeof searchParams.dk === "string"
      ? searchParams.dk
      : Array.isArray(searchParams.dk)
      ? searchParams.dk[0]
      : undefined;

  const data = await getNewsDetail(params.slug, {
    draftKey,
  }).catch(notFound);
  return (
    <>
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}
