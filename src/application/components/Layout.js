import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Todo App</title>
      </Head>
      <header>
        <h1>Todo App</h1>
      </header>
      <main>{children}</main>
      <footer>© 2023 Todo App</footer>
    </div>
  );
}
