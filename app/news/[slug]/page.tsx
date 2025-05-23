import Article from "@/app/_components/Article";
import { getNewsDetail } from "@/app/_libs/microcms";
import ButtonLink from "@/app/_components/ButtonLink";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Page({ params, searchParams }: Props) {
  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams.dk as string,
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