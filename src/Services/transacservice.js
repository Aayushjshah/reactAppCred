let url = "http://localhost:8080/api/transaction/merchant";
let url2 = "http://localhost:8080/api/transaction/city";
let url3 = "http://localhost:8080/api/transaction/Job";
let url4 = "http://localhost:8080/api/transaction/category";
let url5 = "http://localhost:8080/api/transaction/state";
let url6= "http://localhost:8080/api/transaction/total_amt/gender"
let url7="http://localhost:8080/api/transaction/spendingByAmount"
let url8="http://localhost:8080/api/transaction/topMerchants"


export async function gettransactionMerchant() {
  let response = await fetch(`${url}`);
  let merchants = await response.json();
  console.log();
  return merchants;
}

export async function gettransactionCity() {
    let response = await fetch(`${url2}`);
    let cities = await response.json();
    console.log();
    return cities;
  }

  export async function gettransactionJob() {
    let response = await fetch(`${url3}`);
    let jobs = await response.json();
    console.log();
    return jobs;
  }
  export async function gettransactionCategory() {
    let response = await fetch(`${url4}`);
    let categories = await response.json();
    console.log();
    return categories;
  }

  
  export async function gettransactionState() {
    let response = await fetch(`${url5}`);
    let states = await response.json();
    console.log();
    return states;
  }
  export async function gettransactionGender() {
    let response = await fetch(`${url6}`);
    let genders = await response.json();
    console.log();
    return genders;
  }
  export async function gettransactionspendingByAmount(high) {
    let response = await fetch(`${url7}/1000/${high}`);
    let spending = await response.json();
    console.log();
    return spending;
  }

  export async function gettransactionTopMerchant(limit) {
    let response = await fetch(`${url8}?limit=${limit}`);
    let topMerchants = await response.json();
    console.log();
    return topMerchants;
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
