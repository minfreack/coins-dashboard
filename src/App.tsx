function App() {
  return (
    <main className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4">
      <header className="text-xl font-bold leading-[4rem]">coins-dashboard</header>
      <section className="py-8">👋</section>
      <footer className="text-center leading-[4rem] opacity-70">
        © {new Date().getFullYear()} coins-dashboard
      </footer>
    </main>
  );
}

export default App;
