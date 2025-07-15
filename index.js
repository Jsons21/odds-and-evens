const $app = document.querySelector("#app");
const $div = document.createElement("div");
const $h2 = document.createElement("h2");
// CSS CODE
const $output_1 = document.createElement("output");
const $output_2 = document.createElement("output");
const $output_3 = document.createElement("output");
const bankArr = [];
const odds = [];
const evens = [];

const addNumberToBank = (e) => {
  //Step 3 add racers when user click the form button
  e.preventDefault();
  console.log(e);
  console.log(e.target);
  console.log(e.target[0]);
  console.log(e.target[0].value);
  // bankArr.push(e.target[0].value);
  // $output_1.value = bankArr;
  const input = e.target.querySelector("#bankInput");
  const num = Number(input.value);

  if (!isNaN(num)) {
    bankArr.push(num);
    $output_1.textContent = bankArr.join(",");
    input.value = "";
  } else {
    alert("Please enter a valid number.");
  }
  $output_1.value = bankArr;
};

const form = () => {
  //Step 2 create the form
  const $form = document.createElement("form");
  $form.style.width = "50%";
  $form.style.margin = "0 auto";
  $form.innerHTML = `
    <div class="form-group">
        <label for="bankInput">Add a number to the bank</label>
        <input type="number" class="form-control" id="bankInput" aria-describedby="emailHelp" placeholder=""><button id ="add-btn" type="submit" class="btn btn-primary">Add number</button><button id="sort-one-btn" type="button" class="btn btn-primary">Sort 1</button><button id="sort-all-btn" type="button" class="btn btn-primary">Sort All</button>
    </div>
    
`;
  $form.addEventListener("submit", addNumberToBank);
  $form.querySelector("#sort-one-btn").addEventListener("click", () => {
    const num = bankArr.shift();
    if (num % 2 === 0) {
      evens.push(num);
      $output_3.textContent = evens.join(", ");
    } else {
      odds.push(num);
      $output_2.textContent = odds.join(", ");
    }
    $output_1.textContent = bankArr.join(", ");
  });
  $form.querySelector("#sort-all-btn").addEventListener("click", () => {
    while (bankArr.length > 0) {
      const num = bankArr.shift();
      if (num % 2 === 0) {
        evens.push(num);
      } else {
        odds.push(num);
      }
    }
    $output_1.textContent = "";
    $output_2.textContent = odds.join(", ");
    $output_3.textContent = evens.join(", ");
  });
  return $form;
};

// The application contains a form that allows users to input a number

const start = () => {
  //Step 1 attach to main div
  const $h2 = document.createElement("h2");
  const $h3_1 = document.createElement("h3");
  const $h3_2 = document.createElement("h3");
  const $h3_3 = document.createElement("h3");
  $h2.textContent = "Odds or Evens";
  $h3_1.textContent = "Bank";
  $h3_2.textContent = "Odd Numbers";
  $h3_3.textContent = "Even Numbers";
  $app.append($h2);
  $app.append(form());
  $app.append($h3_1);
  $app.append($output_1);
  $app.append($h3_2);
  $app.append($output_2);
  $app.append($h3_3);
  $app.append($output_3);
};
start();
