const features = [
  {
    heading: "Built-in Optimizations",
    para: "Automatic Image, Font, and Script Optimizations for improved UX and Core Web Vitals.",
  },
  {
    heading: "Dynamic HTML Streaming",
    para: "Instantly stream UI from the server, integrated with the App Router and React Suspense.",
  },
  {
    heading: "React Server Components",
    para: "Add components without sending additional client-side JavaScript. Built on the latest React features.",
  },
  {
    heading: "Data Fetching",
    para: "Make your React component async and await your data. Next.js supports both server and client data fetching.",
  },
  {
    heading: "CSS Support",
    para: "Style your application with your favorite tools, including support for CSS Modules, Sass, Tailwind CSS, styled-jsx, and more.",
  },
  {
    heading: "Client and Server Rendering",
    para: "Flexible rendering and caching options, including Incremental Static Regeneration (ISR), on a per-page level.",
  },
  {
    heading: "Node.js and Edge Runtimes",
    para: "Build scalable solutions with Serverless functions, and deliver fast dynamic, personalized content with the Edge.",
  },
  {
    heading: "Route Handlers",
    para: "Build API endpoints to securely connect with third party services and consume from your frontend.",
  },
  {
    heading: "Middleware",
    para: "Take control of the incoming request. Use code to define routing and access rules for authentication, experimentation, and internationalization.",
  },
];

const About = () => {
  return (
    <div className="about">
      <div className="content py-10">
        <h2 className="text-[32px] font-bold">What's in Next.js?</h2>
        <p className="text-[#888] text-xl">
          All the tools you need to make the Web. Faster.
        </p>

        <div className="features mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features?.map((feature, i) => (
            <div
              className="feature-box rounded-md border border-[#333] p-4 space-y-2 hover:bg-[#333]"
              key={i}
            >
              <h3 className="text-xl font-semibold">{feature.heading}</h3>
              <p className="text-[#888]">{feature.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
