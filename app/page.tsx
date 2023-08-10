import Blot from "./Blot";
import Form from "./Form";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <h1 className="font-bold text-center"> Pallet Demo</h1>
      <Form />
      <h2 className="mt-10 ml-2 -mb-5">Primary</h2>
      <div className="grid grid-cols-1 mt-9 md:grid-cols-3 xl:grid-cols-9 gap-4">
        {[...Array(9)].map((_, i) => (
          <Blot key={i} color={`primary-${i + 1}00`} />
        ))}
      </div>
      <h2 className="mt-10 ml-2 -mb-5">Secondary</h2>
      <div className="grid grid-cols-1 mt-9 md:grid-cols-3 xl:grid-cols-9 gap-4">
        {[...Array(9)].map((_, i) => (
          <Blot key={i} color={`secondary-${i + 1}00`} />
        ))}
      </div>
      <h2 className="mt-10 ml-2 -mb-5">Accent</h2>
      <div className="grid grid-cols-1 mt-9 md:grid-cols-3 xl:grid-cols-9 gap-4">
        {[...Array(6)].map((_, i) => (
          <Blot key={i} color={`accent-${i + 1}`} />
        ))}
      </div>
    </main>
  );
}
