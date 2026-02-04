export default function Maintain() {
  return (
    <div className="relative w-full min-h-[120vh] overflow-hidden flex flex-col justify-end items-center">

      {/* Blurred background */}
      <div
        className="absolute inset-0 scale-105"
        style={{
          backgroundImage: 'url("maintain.webp")',
          backgroundPosition: '50% -10%',
          backgroundSize: 'cover',
          filter: 'blur(8px)',
        }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center pt-32 gap-12">

        <h1 className="text-5xl font-serif font-bold bg-gradient-to-r from-blue-800 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
          Maintaining A Car?
        </h1>

        {/* Paper-style card */}
        <div
          className="w-[90%] max-w-5xl rounded-2xl p-8 text-xl leading-8 dm-serif text-black
          opacity-60
          
          bg-[#f5f5f5]/90 shadow-xl
          [background-image:repeating-linear-gradient(to_bottom,transparent,transparent_32px,rgba(0,0,0,0.15)_33px)]"
        >
          Can be stressful and frustrating. Hidden charges and unclear timelines leave customers anxious about costs. Poor-quality work or inexperienced technicians may lead to recurring issues, wasting time and money. Delays in completing the service disrupt daily routines, making even simple maintenance a headache. On top of that, unresponsive support leaves customers feeling ignored when questions or problems arise after the service. From unexpected expenses to slow repairs and lack of guidance, these issues turn car care into a painful experience, highlighting why trust, quality, timeliness, and support are crucial.
        </div>

      </div>
    </div>
  );
}
