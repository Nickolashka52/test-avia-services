import React from "react";
import { ServiceItem } from "./ServiceItem";
import type { Service } from "../types";

const mockServices: Service[] = [
  { id: 1, name: "Дополнительный багаж 10 кг", price: 2500 },
  { id: 2, name: "Выбор места в салоне", price: 1500 },
  { id: 3, name: "Питание на борту", price: 1200 },
  { id: 4, name: "Страховка от отмены рейса", price: 3000 },
  { id: 5, name: "Приоритетная посадка", price: 1800 },
];

interface ServiceListProps {
  onAddService: (service: Service) => void;
}

export const ServiceList: React.FC<ServiceListProps> = ({ onAddService }) => {
  return (
    <section className="services-section">
      <h2>Дополнительные услуги</h2>
      <div className="services-grid">
        {mockServices.map((service) => (
          <ServiceItem
            key={service.id}
            service={service}
            onAdd={onAddService}
          />
        ))}
      </div>
    </section>
  );
};
