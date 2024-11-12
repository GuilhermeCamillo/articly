import Form from "next/form";
import { Search } from "lucide-react";
import SearchFormReset from "./SearchFormReset";

const SearchForm = ({ query, action }: { query?: string; action: string }) => {
  return (
    <Form action={action} scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Procurar artigos"
      />

      <div className="flex gap-2">
        {query && <SearchFormReset action={action} />}

        <button type="submit" className="search-btn text-white">
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
