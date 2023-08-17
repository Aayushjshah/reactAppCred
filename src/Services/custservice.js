let url = "http://localhost:8080/api/customer";

export async function getAllCustomer() {
  let response = await fetch(`${url}`);
  let customers = await response.json();
  console.log(customers);
  return customers;
}


export async function addCustomer(customer) {
  let response = await fetch(`${url}`, {
    method: "POST",
    body: JSON.stringify(customer),
    headers: {
      "Content-Type": "application/json",
    },
  });
  let newcustomer = await response.json();
  console.log(newcustomer);
  return newcustomer;
}

export async function deleteCustomer(id) {
  let response = await fetch(`${url}/${id}`, {
    method: "DELETE",
  });
  let data = await response.json();
  console.log(data);
  return data;
}




// export async function getCustomersById(id) {
//   let response = await fetch(`${url}/${id}`);
//   let employee = await response.json();
//   console.log(employee);
//   return employee;
// }


