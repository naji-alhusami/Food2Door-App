import discount from "@/public/Images/discount.png";
import clock from "@/public/Images/clock.avif";
import anytime from "@/public/Images/anytime.png";
import { StaticImageData } from "next/image";

interface AppBenefitsProps {
  id: string;
  header: string;
  text: string;
  image: StaticImageData;
}

const CardsBenefitsData: AppBenefitsProps[] = [
  {
    id: "1",
    header: "Seamless Process",
    text: "FOOD2DOOR offers you freedom and choice to place an order at virtually any time, from anywhere.",
    image: discount,
  },
  {
    id: "1",
    header: "Save Time",
    text: "FOOD2DOOR offers you saves the time and resources typically spent on travelling to pick up a meal.",
    image: clock,
  },
  {
    id: "1",
    header: "Perks & Options",
    text: "FOOD2DOOR offers you offers you enticing promotions and limitless dining options.",
    image: anytime,
  },
];

export default CardsBenefitsData;