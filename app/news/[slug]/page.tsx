import {notFound} from "next/navigation";
import {getNewsDetail} from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import styles from "./page.module.css";
type Props = {
  params: Promise<{
    slug: string;
  }>;
  searchParams?:Promise<{
    dk?: string;
  }>;
};
export default async function Page({ params, searchParams }: Props) {
  // const data = await getNewsDetail(params.slug, {
  //   draftKey: searchParams.dk,
  // }).catch(notFound);

  const { slug } = await params; // Await params to get slug
  const { dk } = (await searchParams) ?? {}; // Provide default empty object if undefined

  const data = await getNewsDetail(slug, {
    draftKey: dk,
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
