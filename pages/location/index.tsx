import React, { useState } from "react";

const AddressLocator: React.FC = () => {
  const [address, setAddress] = useState<string | null>(null);

  const determineAddress = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            const fullAddress = data.display_name;
            setAddress(fullAddress);
          } catch (error) {
            console.error("Error fetching address:", error);
            setAddress(null);
          }
        },
        (error) => {
          console.error("Error getting current location:", error);
          setAddress(null);
        }
      );
    }
  };

  return (
    <div>
      <button onClick={determineAddress}>Determine Address</button>
      {address && <p>Address: {address}</p>}
    </div>
  );
};

export default AddressLocator;