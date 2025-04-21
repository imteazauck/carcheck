export const getMockVehicleData = (reg: string) => {
    const uppercaseReg = reg.toUpperCase();
  
    // Return mocked data based on reg or randomly
    return {
      registration: uppercaseReg,
      make: 'Toyota',
      model: 'Corolla',
      year: 2018,
      fuelType: 'Petrol',
      color: 'Blue',
      engineSize: '1.8L',
      taxStatus: 'Taxed',
      motStatus: 'Valid',
      mileage: '45,000 miles',
    };
  };
  