import StartupForm from "@/components/ArticleForm";

const ArticleCreatePage = () => {
  return (
    <main>
      <section className="black_container">
        <h1 className="heading">Criar artigo.</h1>
      </section>

      <section className="section_container">
        <StartupForm />
      </section>
    </main>
  );
};

export default ArticleCreatePage;
