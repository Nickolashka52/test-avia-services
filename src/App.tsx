import { useState } from "react";
import { ServiceList } from "./components/ServiceList";
import { SelectedServices } from "./components/SelectedServices";
import type { Service, SelectedServicesType } from "./types";

function App() {
  const [selectedServices, setSelectedServices] =
    useState<SelectedServicesType>([]);

  const handleAddService = (service: Service) => {
    setSelectedServices((prev: SelectedServicesType) => {
      if (prev.some((s) => s.id === service.id)) return prev;
      return [...prev, service];
    });
  };

  const totalPrice = selectedServices.reduce(
    (sum: number, s: Service) => sum + s.price,
    0
  );

  return (
    <div className="app-container">
      <main className="main-content">
        <ServiceList onAddService={handleAddService} />
      </main>
      <SelectedServices selected={selectedServices} total={totalPrice} />
    </div>
  );
}

export default App;
