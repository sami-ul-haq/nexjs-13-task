import Image from "next/image";

const Home = () => {
  return (
    <div className="home">
      <div className="flex items-center flex-col-reverse md:flex-row gap-10 min-h-screen">
        <div className="left flex-1 space-y-8">
          <h1 className="text-5xl font-extrabold">
            The React Framework for the Web{" "}
          </h1>
          <p className="color-[#333]">
            Used by some of the world's largest companies, Next.js enables you
            to create full-stack Web applications by extending the latest React
            features, and integrating powerful Rust-based JavaScript tooling for
            the fastest builds.
          </p>
          <div className="btn space-x-4">
            <button className="px-2 py-3 bg-white text-black border rounded-md">
              Get Started
            </button>
            <button className="px-2 py-3 text-white rounded-md border-white border bg-transparent">
              Learn Nextjs
            </button>
          </div>
        </div>
        <div className="right flex-1 relative">
          <Image
            src={"/next-img.webp"}
            width={700}
            height={500}
            alt="hero-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;