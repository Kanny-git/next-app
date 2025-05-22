import { getCategoryDetail, getNewsList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";
import NewsList from "@/app/_componetnts/NewsList";
import Pagination from "@/app/_componetnts/Pagination";
import Category from "@/app/_componetnts/Category";
import { NEWS_LIST_LIMIT } from "@/app/constants";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const category = await getCategoryDetail(params.id).catch(notFound);

  const { contents: news ,totalCount} = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    filters: `category[equals]${category.id}`,
  });

  return (
    <>
      <p>
        <Category category={category} />
        の一覧
      </p>
          <NewsList news={news} />
          <Pagination totalCount={totalCount} basePath={`/news/category/${category.id}`} />
    </>
  );
}
