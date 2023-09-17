import React from "react";
import { services } from "../constants/index";
import ServiceCard from "../components/ServiceCard/ServiceCard";

function Services() {
  return (
    <section className="padding-x py-10">
      <section className="max-container flex justify-center flex-wrap gap-9">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
        
      </section>
    </section>
  );
}

export default Services;
