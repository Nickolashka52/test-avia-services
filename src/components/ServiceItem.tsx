import React from "react";
import type { Service } from "../types";

interface ServiceItemProps {
  service: Service;
  onAdd: (service: Service) => void;
}

export const ServiceItem: React.FC<ServiceItemProps> = ({ service, onAdd }) => {
  return (
    <div className="service-item">
      <div className="service-info">
        <h3 className="service-name">{service.name}</h3>
        <p className="service-price">{service.price} ₽</p>
      </div>
      <button className="add-btn" onClick={() => onAdd(service)}>
        Добавить
      </button>
    </div>
  );
};
