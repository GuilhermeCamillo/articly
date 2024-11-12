import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Form from "./Form";

export default function SignIn() {
  return (
    <main
      className="flex items-center justify-center bg-primary w-full"
      style={{ height: "calc(100vh - 3.5rem)" }}
    >
      <Card className="mx-auto max-w-sm min-w-[360px]">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Digite seu e-mail abaixo para entrar em sua conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form />
          <div className="mt-4 text-center text-sm">
            Não tem uma conta?{" "}
            <Link href="/signup" className="underline">
              Cadastrar
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
