import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Form from "./Form";
import { ArrowLeftCircle } from "lucide-react";

export default function SignUp() {
  return (
    <main
      className="flex items-center justify-center bg-primary w-full"
      style={{ height: "calc(100vh - 3.5rem)" }}
    >
      <Card className="mx-auto max-w-sm min-w-[360px]">
        <CardHeader>
          <Link href="/signin">
            <ArrowLeftCircle className="size-5" />
          </Link>
          <CardTitle className="text-2xl">Cadastro</CardTitle>
        </CardHeader>
        <CardContent>
          <Form />
        </CardContent>
      </Card>
    </main>
  );
}
