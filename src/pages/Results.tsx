import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchVehicleData } from "../api/DvlaApi";
import { Vehicle } from "../types/Vehicle";

const Results: React.FC = () => {
  const { reg } = useParams<{ reg: string }>();
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (reg) {
      fetchVehicleData(reg).then((data) => {
        setVehicle(data);
        setLoading(false);
      });
    }
  }, [reg]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-white shadow rounded">
      {vehicle ? (
        <>
          <h2 className="text-xl font-bold mb-4">Vehicle Details</h2>
          <ul>
            <li><strong>Registration:</strong> {vehicle.registration}</li>
            <li><strong>Make:</strong> {vehicle.make}</li>
            <li><strong>Model:</strong> {vehicle.model}</li>
            <li><strong>Year:</strong> {vehicle.year}</li>
            <li><strong>Fuel Type:</strong> {vehicle.fuelType}</li>
            <li><strong>Color:</strong> {vehicle.color}</li>
          </ul>
        </>
      ) : (
        <p>No data found for registration: {reg}</p>
      )}
    </div>
  );
};

export default Results;
