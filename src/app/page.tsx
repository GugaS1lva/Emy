import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-[80px] flex flex-col items-center justify-center w-full h-screen text-7xl font-bold bg-linear-to-r from-rose-500 via-pink-500 to-red-500">

      <div className=" flex flex-col items-center">
        <Image
          src={'/emy.webp'}
          width={300}
          height={300}
          alt="emy"
        />
        <h1>Pack do pé da emy</h1>
        <Image
          src={'/emy.webp'}
          width={300}
          height={300}
          alt="emy"
        />
      </div>

      <section className="text-2xl">Capa das 21 linhas (cm)</section>
    </main>
  );
}
