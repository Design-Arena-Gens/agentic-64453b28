export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-stretch justify-center gap-8 px-6 py-20 sm:px-10">
        <div>
          <h1 className="text-4xl font-semibold leading-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            ???? ??
          </h1>
          <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-400">
            ?? ??????? ????? ??? ?????. ??? ????? ?? Next.js? TypeScript ? Tailwind ????? ??? ???.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
          >
            <h2 className="text-base font-medium text-zinc-900 dark:text-zinc-50">
              ??????? Next.js ?
            </h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              ??????? ???? ???? ???? ????? ???????????? ?? ????.
            </p>
          </a>
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
          >
            <h2 className="text-base font-medium text-zinc-900 dark:text-zinc-50">
              ??????? ?? Vercel ?
            </h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              ??????? ??? ? ?????????? ???? ????????? Next.js.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
