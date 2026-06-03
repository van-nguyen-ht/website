export default function Hero() {
  return (
    <div className="min-h-screen bg-[#292033] flex items-center justify-center relative px-8">
      <div className="absolute top-8 right-8">
        <span className="text-[#FFB199] text-lg font-light">Portfolio</span>
      </div>
      <h1 className="text-[#FFB199] text-[20vw] md:text-[15vw] leading-[0.9] font-light select-none">
        <span className="block">Van</span>
        <span className="block">Nguyen</span>
      </h1>
    </div>
  )
}
