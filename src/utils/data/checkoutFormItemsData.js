const checkoutFormItemsData = {
  billing: [
    {
      section: "billing details",
      name: "name",
      placeholder: "John Doe",
      label: "name",
      type: "text",
    },
    {
      section: "billing details",
      name: "email",
      placeholder: "johndoe@gmail.com",
      label: "email address",
      type: "text",
    },
    {
      section: "billing details",
      name: "phone",
      placeholder: "07654321098",
      label: "phone number",
      type: "number",
    },
  ],

  shipping: [
    {
      section: "shipping",
      name: "postCode",
      placeholder: "W9 4HG",
      label: "ZIP code",
      type: "text",
    },
    {
      section: "shipping",
      name: "city",
      placeholder: "London",
      label: "city",
      type: "text",
    },
    {
      section: "shipping",
      name: "country",
      placeholder: "United Kingdom",
      label: "countryu",
      type: "text",
    },
  ],
  paymentMethod: [
    {
      id: "e-Money",
      label: "e-Money",
      type: "radio",
    },
    {
      id: "Cash on Delivery",
      label: "Cash on Delivery",
      type: "radio",
    },
  ],
  paymentCredentials: [
    {
      label: "e-Money Number",
      placeholder: "238521993",
      name: "eNumber",
      type: "number",
    },
    {
      label: "e-Money PIN",
      placeholder: "6891",
      name: "ePin",
      type: "number",
    },
  ],
};

export default checkoutFormItemsData;
