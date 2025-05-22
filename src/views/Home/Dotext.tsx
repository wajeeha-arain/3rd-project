import Image from "next/image";

export default function Page () {
  
  return (
    <div className="main-container">
      <div className="flex flex-col lg:flex-row lg:gap-20  md:pb-10">
        <div className="w-full lg:w-[555px]">
          <Image
            src="/images/do.jpeg"
            alt="image"
            className="object-cover rounded-lg w-full"
            width={355}
            height={120}
          />
        </div>

        <div className="grid grid-cols-2 md:gap-20 gap-10 lg:w-[95%] w-full mt-2 mb-8">
          {points.map((point) => (
            <div key={point.id}>
              <h3 className="font-semibold sm:text-lg text-[#172554]">{point.title}</h3>
              <p className="text-[12px] border-b-[1px] text-[#172554] border-[rgba(0, 0, 0, 0.3)]">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};






 
const points = [
  {
    id: 1,
    title: "Parkeergelegenheid",
    description: "Parkeergarage, op eigen terrein, op afgesloten terrein",
  },
  {
    id: 2,
    title: "Tuin",
    description: "Geen tuin",
  },
  {
    id: 3,
    title: "Ligging",
    description:  "In woonwijk, vrij uitzicht",
  },
  {
    id: 4,
    title:"Voorzieningen",
    description: "Mechanische ventilatie, tv kabel, lift, schulpuil, natuurlijke ventilatie" 
  },

  {
    id: 5,
    title:"Isolatie",
    description:"Dakisolatie, muurisolatie, vloerisolatie, dubbel glas, hr glas"
    },
    {
      id: 6,
      title: "Verwarming" ,
      description: "Cv ketel, vloerverwarming geheel"
    },
    {
      id: 7,
      title:  "Warm water" ,
      description:"Cv ketel"
    },
    {
      id: 8,
      title:   "CV-ketel" ,
      description: "Intergas hre" ,
    },
];