import Article from "@/app/_components/Article";
import { getNewsDetail } from "@/app/_libs/microcms";
import ButtonLink from "@/app/_components/ButtonLink";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

// type PageProps = {
//   params: {
//     slug: string;
//   };
//   searchParams: {
//     dk?: string;
//   }
// };

// export default async function Page({ params, searchParams }: PageProps) {
//   const data = await getNewsDetail(params.slug, {
//     draftKey: searchParams.dk,
//   }).catch(notFound);

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const resolvedParams = await params;
  const data = await getNewsDetail(resolvedParams.slug, {
    draftKey: searchParams?.dk as string | undefined,
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
