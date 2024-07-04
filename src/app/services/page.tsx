import ServicesCard from "@/components/cards/services-card"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookers | Services",
  description: "Bookers website for services",
};

const Services = () => {
  return (
    <section>
      <ServicesCard />
    </section>
  )
}

export default Services