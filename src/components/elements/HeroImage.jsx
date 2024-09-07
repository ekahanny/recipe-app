import HeroImg from "../../assets/Desain tanpa judul.png"

const HeroImage = () => {
    return (
        <div className="relative">
            <img src={HeroImg} alt="" className="w-full" />
            <h1 className="absolute top-[45%] left-[60%] translate-x-[-50%] translate-y-[-50%] text-5xl font-bold sm:text-3xl">
            Explore Culinary <h1 className="text-orange-300 mt-3 italic sm:text-3xl">Delights.</h1> 
            </h1>
      </div>
    )
}

export default HeroImage