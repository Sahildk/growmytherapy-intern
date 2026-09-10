import React from "react";
import Image from "next/image";

export default function WhoWeHelpSection() {
  const cards = [
    {
      title: "High Achievers",
      image: "/img/who-help-1.jpg",
      alt: "Thoughtful woman sitting near window reflecting in warm sunlight",
      description:
        "You're capable, accomplished, and used to holding everything together. But internally, you feel constant pressure, perfectionism, and the quiet fear of dropping the ball. Therapy offers a grounded space to breathe and let your guard down.",
    },
    {
      title: "Trauma Survivors",
      image: "/img/who-help-2.jpg",
      alt: "Person sitting peacefully on California coastal overlook in warm sunset light",
      description:
        "Whether shaped by a single painful event or years of chronic relational stress, trauma lives in the body. Using EMDR and somatic therapy, we gently process past experiences so you can feel genuinely safe and rooted in the present.",
    },
    {
      title: "Burnout & Perfectionism",
      image: "/img/who-help-3.jpg",
      alt: "Creative professional taking a deep mindful breath at studio table",
      description:
        "Exhausted from striving, overthinking, or running on fumes? We examine the internalized beliefs that keep you in overdrive, helping you set healthy boundaries, recover your energy, and reconnect with what truly matters.",
    },
  ];

  return (
    <section id="about" className="w-full bg-white py-20 md:py-28 lg:py-36">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-10 md:px-14 lg:px-28">
        {/* Title with Cursive Accent - aligned with left container margin (x=112) */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[#2A1F1A] tracking-tight mb-12 md:mb-16">
          Who I{" "}
          <span className="font-script text-[#B5694C] text-[1.22em] lowercase font-normal inline-block ml-2 align-baseline relative top-[2px]">
            help
          </span>
        </h2>

        {/* 3-Column Grid - indented on desktop to span x=315 to x=1823 matching original */}
        <div className="lg:ml-[10.5vw] xl:ml-[11vw] grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 xl:gap-8">
          {cards.map((card) => (
            <div key={card.title} className="flex flex-col group w-full">
              {/* Card Image */}
              <div className="w-full overflow-hidden shadow-none">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={800}
                  height={800}
                  className="w-full aspect-square object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out block"
                />
              </div>

              {/* Card Content */}
              <h3 className="text-2xl sm:text-[26px] font-serif font-normal text-[#2A1F1A] mt-7 mb-3.5 tracking-tight">
                {card.title}
              </h3>

              <p className="text-[14.5px] sm:text-[15.5px] text-[#554238] font-light leading-[1.8]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
