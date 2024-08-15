import Search from "@/components/Search";
import Header from "@components/ui/Header";
function HomePage() {
  return (
    <>
      <Header />
      <main className="max-w-5xl px-3 py-10 mx-auto my-0">
        <div className="flex flex-col items-center mb-10 text-center">
          <h1 className="mb-3 text-3xl font-bold md:text-5xl">
            Encuentra y explora usuarios de
            <span className="text-primary">GitHub</span> fácilmente
          </h1>
          <p className="text-lg text-white/70 md:text-xl">
            Consulta la información y los repositorios de cualquier usuario de
            GitHub aquí.
          </p>
        </div>
        <div className="flex justify-center">
          <Search />
        </div>
      </main>
    </>
  );
}

export default HomePage;
