const item = {
  name: "Aklavya Pathak",
  phoneNumber: "9664825164",
  marks: {
    maths: 100,
    physics: 100,
    chemistry: 100,
  },
  address: {
    homeaddress: {
      city: "Silvassa",
      state: "Dadra and Nagar Haveli",
      country: "India",
    },
    workaddress: {
      city: "Vapi",
      state: "Gujarat",
      country: "India",
    },
  },
};

console.log(
  "\n",
  item.name,
  "\n",
  item.phoneNumber,
  "\n",
  item.marks.maths,
  "\n",
  item.marks.physics,
  "\n",
  item.marks.chemistry,
  "\n",
  item.address.homeaddress.city,
  "\n",
  item.address.homeaddress.state,
  "\n",
  item.address.homeaddress.country,
  "\n",
  item.address.workaddress.city,
  "\n",
  item.address.workaddress.state,
  "\n",
  item.address.workaddress.country,
  "\n"
);
