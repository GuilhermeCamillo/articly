import { FileX } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function EmptyState({
  message = "Nenhum artigo encontrado",
  actionLabel = "Criar novo artigo",
}: {
  message?: string;
  actionLabel?: string;
}) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex flex-col items-center justify-center p-6 text-center">
        <FileX className="w-12 h-12 text-gray-400 mb-4" aria-hidden="true" />
        <h2 className="text-xl font-semibold mb-2">{message}</h2>
        <p className="text-gray-500 mb-4">
          Parece que não há artigos para exibir no momento.
        </p>
        <Link href="/article/create">
          <Button>{actionLabel}</Button>
        </Link>
      </div>
    </div>
  );
}
