import { mapdata } from "@/data";
import Image from "next/image";

export default function Mapsectioncontent() {
  return (
    <div className="main-container">
      <div className="flex flex-col lg:flex-row lg:gap-20 lg:mt-4 mt-8">
        <div className="lg:max-w-[350px]">
          <div className="w-full">
            <Image
              src="/images/map.jpeg"
              alt="image"
              className="object-cover rounded-lg w-full shadow-lg"
              width={355}
              height={120}
            />
          </div>
          <div>
            <h1 className="text-[20px] font-semibold text-[#172554] py-4">
              Heb ik zon in mijn tuin?
            </h1>
            <p className="font-bold text-[13px] text-[#374151] leading-6 lg:pb-0 pb-4">
              {`De ligging van je tuin is niet gespecificeerd. Echter, ongeacht de
              ligging, kan elke tuin worden omgetoverd tot een prachtige
              buitenruimte. Met de juiste planning en design kan je een tuin
              creëren die bij je levensstijl past en die je kunt genieten in elk
              seizoen. Of je nu houdt van tuinieren, buiten eten, of gewoon
              ontspannen in de open lucht, je tuin kan de perfecte plek zijn
              voor al deze activiteiten en nog veel meer.`}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:gap-20 gap-4 my-2">
          {mapdata.map((point) => (
            <div key={point.id}>
              <h3 className="font-semibold text-[19.78px] pb-2 text-[#172554]">
                {point.title}
              </h3>

              {point.item?.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 sm:gap-24 gap-28 leading-5 font-bold text-[12px] text-[#374151] border-b-[1px] border-[rgba(0, 0, 0, 0.3)] py-1"
                >
                  <p>{item.text}</p>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
