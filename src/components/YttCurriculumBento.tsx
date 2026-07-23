import {
  Flower2,
  Wind,
  Activity,
  HeartHandshake,
  BookOpen,
  CircleDot,
  CheckCircle2,
} from "lucide-react";
import {
  BentoGridWithFeatures,
  type BentoFeature,
} from "@/components/ui/bento-grid";

const iconClass = "h-6 w-6 text-[#150e70]";

const features: BentoFeature[] = [
  {
    id: "asana",
    title: "Asana Practice",
    description:
      "Ashtanga Vinyasa and Hatha Yoga, with deep focus on posture, alignment and safe adjustment techniques.",
    content: <Flower2 className={iconClass} />,
    className: "col-span-1 md:col-span-3 lg:col-span-2 border-b md:border-r border-[#eadfc9]",
  },
  {
    id: "pranayama",
    title: "Pranayama",
    description:
      "Twelve breathing techniques, including Anulom Viloma, Bhastrika, Kapalbhati and Bhramari, for respiratory and cardiovascular health.",
    content: <Wind className={iconClass} />,
    className: "col-span-1 md:col-span-3 lg:col-span-2 border-b lg:border-r border-[#eadfc9]",
  },
  {
    id: "anatomy",
    title: "Anatomy & Physiology",
    description:
      "The body's eight primary systems, and how yogic practice supports cardiovascular, digestive, skeletal and muscular health.",
    content: <Activity className={iconClass} />,
    className: "col-span-1 md:col-span-6 lg:col-span-2 border-b border-[#eadfc9]",
  },
  {
    id: "kriyas",
    title: "Kriyas & Mudras",
    description:
      "Six traditional purification techniques alongside healing mudra practices for holistic wellbeing.",
    content: <HeartHandshake className={iconClass} />,
    className: "col-span-1 md:col-span-3 lg:col-span-2 border-b md:border-r border-[#eadfc9]",
  },
  {
    id: "philosophy",
    title: "Yoga Philosophy",
    description:
      "Indian philosophical systems, the Bhagavad Gita, and the Four Yogas — Karma, Bhakti, Jnana and Raja.",
    content: <BookOpen className={iconClass} />,
    className: "col-span-1 md:col-span-3 lg:col-span-2 border-b lg:border-r border-[#eadfc9]",
  },
  {
    id: "meditation",
    title: "Meditation",
    description:
      "Chakra balancing, kundalini yoga, mantra yoga and sound healing, practiced daily throughout the training.",
    content: <CircleDot className={iconClass} />,
    className: "col-span-1 md:col-span-6 lg:col-span-2 border-[#eadfc9]",
  },
];

const includes = [
  "Three daily vegetarian meals",
  "Comfortable accommodation on the banks of the Ganges",
  "Aura healing sessions & Marma massage",
  "Stress management workshops",
  "Karma yoga service at Pankh, our sister NGO school",
  "Dual certification — Yoga Alliance International & World Yoga Federation",
  "Placement assistance after graduation",
];

export function YttCurriculumBento() {
  return (
    <div className="py-[70px] px-5 bg-[#faf9f6]">
      <div className="max-w-[1020px] mx-auto">
        <p className="text-center text-[13px] font-bold tracking-[1.5px] uppercase text-[#b8860b] mb-2">
          What You&apos;ll Learn
        </p>
        <h2 className="text-center text-2xl md:text-[32px] font-bold text-[#150e70] mb-4">
          Inside the 200-Hour Yoga Teacher Training
        </h2>
        <p className="text-center text-base md:text-[17px] text-[#444] leading-[1.7] max-w-[720px] mx-auto mb-10">
          Over 20 residential days on the banks of the Ganga, you&apos;ll build a
          complete foundation in yogic science — rooted in tradition, taught
          with depth, and structured to prepare you to teach with confidence
          anywhere in the world.
        </p>

        <BentoGridWithFeatures
          features={features}
          className="mb-11 border-[#eadfc9] bg-white"
        />

        <div className="bg-white border border-[#eadfc9] rounded-xl py-[34px] px-[30px]">
          <h3 className="text-center text-xl font-bold text-[#150e70] mb-[18px]">
            What&apos;s Included
          </h3>
          <ul className="list-none m-0 p-0 grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[14px]">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-[10px] text-[15px] text-[#333] leading-[1.5]">
                <CheckCircle2 className="h-[18px] w-[18px] text-[#b8860b] flex-shrink-0 mt-[2px]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
