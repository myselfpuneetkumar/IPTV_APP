export default function Live() {
  return (
    <div
      className="relative h-[450px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://thumbs.dreamstime.com/z/vii-178892087.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 h-full flex flex-col justify-center px-10">

        <h1 className="text-5xl font-bold">
          IPL Live 2026
        </h1>

        <p className="max-w-xl mt-4 text-gray-300">
          Watch your favourite live channels,
          sports and movies in HD quality.
        </p>

        <div className="flex gap-4 mt-8">

          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold">
            ▶ Watch Now
          </button>

          <button className="bg-white/20 hover:bg-white/30 px-8 py-3 rounded-lg">
            ❤️ Favorite
          </button>

        </div>

      </div>
    </div>
  );
}