let Viettel: string[] = [];
let Vinaphone: string[] = [];
let Mobiphone: string[] = [];

function PhoneNumSort(array: string[]) {
  array.forEach((item) => {
    if (item.slice(0, 3) === "091" || item.slice(0, 3) === "094") {
      Vinaphone.push(item);
    } else if (item.slice(0, 3) === "090" || item.slice(0, 3) === "093") {
      Mobiphone.push(item);
    } else if (item.slice(0, 3) === "098" || item.slice(0, 3) === "097") {
      Viettel.push(item);
    }
  });
}

let phoneArray = [
  "091111111",
  "094444444",
  "093333333",
  "090000000",
  "098888888",
  "097777777",
];

PhoneNumSort(phoneArray);

console.log(Viettel);
console.log(Vinaphone);
console.log(Mobiphone);
