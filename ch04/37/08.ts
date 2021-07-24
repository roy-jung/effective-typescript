type Meters_3708 = number & {_brand: 'meters'};
type Seconds_3708 = number & {_brand: 'seconds'};

const meters_3708 = (m: number) => m as Meters_3708;
const seconds_3708 = (s: number) => s as Seconds_3708;

const oneKm_3708 = meters_3708(1000);  // Type is Meters_3707
const oneMin_3708 = seconds_3708(60);  // Type is Seconds_3707
const tenKm_3708 = oneKm_3708 * 10;  // Type is number
const v_3708 = oneKm_3708 / oneMin_3708;  // Type is number
