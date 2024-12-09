import ArticleCard from "@/components/ArticleCard";
import SearchForm from "@/components/SearchForm";
import { getAllArticles } from "@/store/article.service";
import { Article, User } from "@prisma/client";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };

  const articles = await getAllArticles({ search: params.search });

  return (
    <main>
      <section className="black_container">
        <h1 className="heading">
          Escreva artigos, <br />
          impacte o mundo.
        </h1>

        <p className="sub-heading !max-w-3xl">
          Crie seus artigos, mostre suas ideias e ganhe destaque.
        </p>

        <SearchForm query={query} action="/" />
      </section>

      <section className="section_container">
        <p className="text-[30px] font-bold text-black p-4">
          {query ? `Buscando por "${query}"` : "Todos os artigos"}
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {articles?.map(
            (item: Partial<Article & { user: Partial<User> }>, index) => (
              <ArticleCard key={item.id} item={item} />
            )
          )}
        </div>
      </section>
    </main>
  );
}
