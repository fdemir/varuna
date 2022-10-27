import Image from "next/image";

const Home = () => {
  return (
    <div className="h-screen grid place-items-center bg-slate-100">
      <Image
        className="z-10 "
        src="/planet.png"
        width={682}
        height={723}
        alt="Planet"
      />
      <h1 className="text-[18rem] absolute z-0 ">Varuna</h1>
    </div>
  );
};

export default Home;
