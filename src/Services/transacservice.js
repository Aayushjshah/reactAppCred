let url = "http://localhost:8080/api/transaction/merchant";
let url2 = "http://localhost:8080/api/transaction";



export async function gettransactionMerchant() {
  let response = await fetch(`${url}`);
  let transactions = await response.json();
  console.log();
  return transactions;
}

export async function gettransactionCity(id) {
    let response = await fetch(`${url2}/${id}`);
    let cities = await response.json();
    console.log();
    return cities;
  }



// a. By gender
// b. By spending category
// c. By merchant
// d. By city
// e. By state
// f. By profession
// g. By amount of spending (low value vs high value transactions)

// export async function gettransactionsByFilter(id) {
//   let response = await fetch(`${url}/${id}`);
//   let employee = await response.json();

//   console.log(employee);
//   return employee;
// }
