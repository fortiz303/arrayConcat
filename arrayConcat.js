//send to Eduardo
let sneakers = ['nikes','adidas','pumas'];
let boots = ['timbs','carhart','USPA'];

function sneakersAndBoots(a,b) {
  return (a.concat(b));
};
  let sneakersAndBootsArray = sneakersAndBoots(sneakers,boots);
  let sneakersAndBootsString = sneakersAndBootsArray.toString();

  console.log(sneakersAndBootsString);
