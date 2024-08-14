import Search from "@/components/Search";
import Header from "@components/ui/Header";
function HomePage() {
  return (
    <>
      <Header />
      <main className="max-w-5xl my-0 mx-auto py-10 px-3">
        <div className="flex flex-col items-center text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            Encuentra y explora usuarios de{" "}
            <span className="text-primary">GitHub</span> fácilmente
          </h1>
          <p className="text-white/70 text-lg md:text-xl">
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
