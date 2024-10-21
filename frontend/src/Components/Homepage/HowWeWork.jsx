import foodDonated from "../../assets/foodDonated.jpg";
import foodSecured from "../../assets/FoodSecured.jpg";
import foodGiven from "../../assets/FoodGiven.jpg";
import HighlightText from "./HighlightText";

function HowWeWork() {
  return (
    <div className="w-screen flex flex-col items-center font-edu-sa pt-10">
      {/* Heading */}
      <div className="text-4xl md:text-5xl text-white font-bold mb-5 text-center">
        How <HighlightText text={"we "} />
        work?
      </div>
      {/* Images */}
      <div className="flex flex-col md:flex-row w-full md:w-10/12 p-5 md:p-10 gap-5 md:gap-10">
        <div className="w-full md:w-[30%] flex flex-col gap-4 md:gap-12 hover:bg-richblack-700 pb-10 hover:scale-105 transition-transform duration-300">
          <img src={foodDonated} className="w-full object-cover" alt="howWeWorkImages"/>
          <div className="text-center px-4 md:px-0">
            <div className="text-2xl md:text-3xl text-white font-bold mb-2 md:mb-5">Food is Donated</div>
            <div>Banquets, farms, restaurants, cafeterias, hotels, stadiums, post excess food in under a minute on the Feed Forward App.</div>
          </div>
        </div>
        <div className="w-full md:w-[30%] flex flex-col gap-4 md:gap-12 hover:bg-richblack-700 pb-10 hover:scale-105 transition-transform duration-300">
          <img src={foodSecured} className="w-full object-cover" alt="howWeWorkImages"/>
          <div className="text-center px-4 md:px-0">
            <div className="text-2xl md:text-3xl text-white font-bold mb-2 md:mb-5">Food is Secured</div>
            <div>Pre-vetted charities immediately get notified about food donations and can claim any donations they can use to serve hungry clients.</div>
          </div>
        </div>
        <div className="w-full md:w-[30%] flex flex-col gap-4 md:gap-12 hover:bg-richblack-700 pb-10 hover:scale-105 transition-transform duration-300">
          <img src={foodGiven} className="w-full object-cover" alt="howWeWorkImages"/>
          <div className="text-center px-4 md:px-0">
            <div className="text-2xl md:text-3xl text-white font-bold mb-2 md:mb-5">Food is Picked Up</div>
            <div>The charity, or a network of volunteers, picks up the food, does quality checks, ensures hygiene and serves it to hungry people.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWeWork;
