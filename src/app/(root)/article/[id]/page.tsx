import { formatDate } from "@/lib/utils";
import { getArticleById } from "@/store/article.service";
import markdownit from "markdown-it";

const md = markdownit();

const Articles = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const article = await getArticleById(id);

  const parsedContent = md.render(article?.content || "");

  return (
    <main>
      <section className="black_container">
        <h1 className="heading line-clamp-5 break-all">{article?.title}</h1>
        <h2 className="sub-heading text-white">{article?.description}</h2>
        <p className="mt-3 p-4 bg-slate-100 text-black font-bold rounded-sm">
          {formatDate(article?.createdAt!.toString())}
        </p>
      </section>

      <section className="section_container">
        <article
          className="prose max-w-4xl font-work-sans break-all"
          dangerouslySetInnerHTML={{ __html: parsedContent }}
        />
      </section>
    </main>
  );
};

export default Articles;
