import React from "react";
import type { SelectedServicesType } from "../types";

interface SelectedServicesProps {
  selected: SelectedServicesType;
  total: number;
}

export const SelectedServices: React.FC<SelectedServicesProps> = ({
  selected,
  total,
}) => {
  if (selected.length === 0) return null;

  return (
    <aside className="summary-sidebar">
      <h2>Итого</h2>
      <ul className="selected-list">
        {selected.map((service) => (
          <li key={service.id}>
            <span>{service.name}</span>
            <span>{service.price} ₽</span>
          </li>
        ))}
      </ul>
      <div className="total">
        <strong>Общая сумма:</strong>
        <strong>{total} ₽</strong>
      </div>
      <button className="checkout-btn">Оформить заказ</button>
    </aside>
  );
};
