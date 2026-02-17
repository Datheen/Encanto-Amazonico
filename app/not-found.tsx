import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center bg-zinc-950 text-zinc-100 p-6">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-zinc-400">Página não encontrada.</p>
        <Link
          href="/"
          className="inline-flex rounded-lg bg-zinc-100 text-zinc-900 px-4 py-2 font-medium hover:opacity-90"
        >
          Voltar pro início
        </Link>
      </div>
    </main>
  );
}
