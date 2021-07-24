type Meters_3707 = number & {_brand: 'meters'};
type Seconds_3707 = number & {_brand: 'seconds'};

const meters_3707 = (m: number) => m as Meters_3707;
const seconds_3707 = (s: number) => s as Seconds_3707;

const oneKm_3707 = meters_3707(1000);  // Type is Meters_3707
const oneMin_3707 = seconds_3707(60);  // Type is Seconds_3707
