export default function ShowOff() {
  const services = [
    {
      title: "Trust & Transparency",
      description:
        "We provide clear pricing, timelines, and procedures. No hidden charges or surprises, ensuring our customers feel confident and informed every step.",
      img: "serviceShowOff1.jpg",
    },
    {
      title: "Quality Service",
      description:
        "Our skilled professionals use reliable tools and proven methods to deliver service that lasts, ensuring maximum satisfaction and value.",
      img: "serviceShowOff2.png",
    },
    {
      title: "Timely Delivery",
      description:
        "We respect our customers’ time, adhering to schedules, providing updates, and completing work efficiently without compromising on quality.",
      img: "serviceShowOff3.jpg",
    },
    {
      title: "Customer Support",
      description:
        "Responsive support before and after service, addressing questions, feedback, or issues quickly so customers always feel valued and cared for.",
      img: "serviceShowOff4.jpg",
    },
  ];

  const size=services.length;

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center py-12">
  <h1 className="text-5xl font-bold font-serif bg-gradient-to-r from-blue-800 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
    We |<span className="text-gray-700"> |Ensure</span>
  </h1>
</div>

<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 ">
  {services.map((service, index) => (
    <div
  key={index}
  className={`flex flex-col items-center p-6 rounded-3xl hover:shadow-xl transition-shadow duration-300
    ${
      index === 0
        ? "border-r-2 border-gray-600"                 // first card
        : index === services.length - 1
        ? "border-l-2 border-gray-600"                 // last card
        : "border-l-2 border-r-2 border-gray-600"     // inner cards
    }`}
>

      <img
        src={service.img}
        alt={service.title}
        className="w-32 h-32 object-cover mb-4 rounded-full"
      />
      <h2 className="text-xl font-semibold mb-2 text-center font-serif">{service.title}</h2>
      <p className="text-gray-600 text-center dm-serif">{service.description}</p>
    </div>
  ))}
</div>

    </>
  );
}
