import SearchForm from "@/components/SearchForm";
import { getAllArticlesById } from "@/store/article.service";
import { auth } from "../../../../auth";
import { Article, User } from "@prisma/client";
import ArticleCard from "@/components/ArticleCard";
import EmptyState from "@/components/EmptyState";

const Articles = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const session = await auth();
  const query = (await searchParams).query;
  const params = { search: query || null };

  const articles = await getAllArticlesById({
    search: params.search,
    userId: session?.user?.id,
  });

  return (
    <main>
      <section className="black_container">
        <h1 className="heading">Meus artigos.</h1>

        <SearchForm query={query} action="/articles" />
      </section>

      <section className="section_container">
        <p className="text-[30px] font-bold text-black p-4">
          {query ? `Buscando por "${query}"` : "Todos os artigos"}
        </p>

        {articles && articles?.length > 0 ? (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {articles?.map(
              (item: Partial<Article & { user: Partial<User> }>, index) => (
                <ArticleCard key={item.id} item={item} />
              )
            )}
          </div>
        ) : (
          <div className="p-4">
            <EmptyState />
          </div>
        )}
      </section>
    </main>
  );
};

export default Articles;
