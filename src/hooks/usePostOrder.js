const usePostOrder = () => {
  const postOrderDbEmoney = async (formData, order, payment) => {
    await fetch("/api/orders", {
      method: "POST",
      body: JSON.stringify({
        billing: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        },
        shipping: {
          address: formData.address,
          postCode: formData.postCode,
          city: formData.city,
          country: formData.country,
        },
        payment: {
          method: payment,
          eNumber: formData.eNumber,
          ePin: formData.ePin,
        },
        orderItems: order,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const postOrderDbCashOnDelivery = async (formData, order, payment) => {
    await fetch("/api/orders", {
      method: "POST",
      body: JSON.stringify({
        billing: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        },
        shipping: {
          address: formData.address,
          postCode: formData.postCode,
          city: formData.city,
          country: formData.country,
        },
        payment: {
          method: payment,
        },
        orderItems: order,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return { postOrderDbEmoney, postOrderDbCashOnDelivery };
};

export default usePostOrder;
