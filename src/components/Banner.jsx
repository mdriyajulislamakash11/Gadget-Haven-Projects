import banner from '../assets/banner.jpg';

const Banner = () => {
    return (
        <div className="min-h-[694px] rounded-b-xl bg-purple-600 text-center relative mb-96">
            <div className="w-10/12 mx-auto pt-36 pb-7">
                <h1 className="mb-6 text-6xl text-white font-medium">Upgrade Your Tech Accessorize with <br />Gadget Heaven Accessories</h1>
                <p className="mb-8 text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <button className="btn rounded-full text-lg font-bold text-[#9538E2]">Shop Now</button>
            </div>

            {/* Banner image div */}
            <div className="w-[1062px] absolute left-1/2 -translate-x-1/2 border-2 p-4 bg-[#FFFFFF4D] rounded-3xl">
                <img className=" object-cover h-[562px] rounded-3xl w-full " src={banner} alt="Banner" />
            </div>
        </div>
    );
};

export default Banner;
