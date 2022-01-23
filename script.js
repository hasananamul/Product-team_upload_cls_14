/**
 * Product upload script atart
 */

let upload_form = document.getElementById("product_upload");
let product_section = document.querySelector(".product_section");

upload_form.addEventListener("submit", function (e) {
  e.preventDefault();
  let pdct_name = this.querySelector("input[name='name']").value;
  let sl_prize = this.querySelector("input[name='sl_prize']").value;
  let rg_price = this.querySelector("input[name='rg_prize']").value;
  let image = this.querySelector("input[name='image']").value;

  /**
   * Form validation
   */

  if (
    this.querySelector("input[name='name']").value == "" ||
    this.querySelector("input[name='sl_prize']").value == "" ||
    this.querySelector("input[name='rg_prize']").value == "" ||
    this.querySelector("input[name='image']").value == ""
  ) {
    alert("All the field must be fill-up !");
  } else {
    /**
     * Get data from local stirage
     */
    let input_arry;

    if (get_data("products")) {
      input_arry = get_data("products");
    } else {
      input_arry = [];
    }

    /**
     * Push data to arry
     */
    input_arry.push({
      Name: pdct_name,
      Sell_prize: sl_prize,
      reguller_prize: rg_price,
      Image: image,
    });

    /**
     * Send data to local storage
     */
    set_data("products", input_arry);
    product();
  }
});
product();

/**
 * Data send to DOM
 */
function product() {
  let all_product = get_data("products");

  let p_data = "";
  all_product.map((data) => {
    p_data += ` <div class="col-md-4">
              <div class="card-deck">
                <div class="card shadow my-3">
                  <img class="card-img-top" src="
                    ${data.Image}
                   "
                  />
                  <div class="card-body">
                    <h4 class="card-title">${data.Name}</h4>
                    <div class="product-price">
                      <span class="rg_price"> ${data.reguller_prize} ৳ </span>
                      <span class="sl_price h5">${data.Sell_prize} ৳ </span>
                    </div>
                    <div
                      class="d-flex justify-content-between align-items-baseline"
                    >
                      <div class="add_card">
                        <i
                          class="text-success h4 fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <button class="btn-success w-75">Add to card</button>
                      <div class="love">
                        <i
                          class="text-success h4 fa fa-heart-o"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
    product_section.innerHTML = p_data;
  });
}

/*************************************************************** */

/**
 *
 * Team member section script start
 */

let team_form = document.getElementById("team_form");
let team_section = document.querySelector(".team_section");

team_form.addEventListener("submit", function (prevent) {
  prevent.preventDefault();

  let dev_name = this.querySelector('input[name="name"]').value;
  let dev_gmail = this.querySelector('input[name="img"]').value;
  let dev_gender = this.querySelector('input[name="gender"]').value;
  let dev_skill = this.querySelectorAll('input[type="checkbox"]:checked');

  console.log(dev_name);
});

// set_data("team", team_member);

let get_team = get_data("team");

console.log(get_team);
get_team.map((data) => {
  team_section.innerHTML += `<div class="col-md-4">
              <div class="my-5 card shadow">
                <div class="card-img">
                  <img
                    class="card-img-top"
                    src="${data.Image}"
                  />
                </div>
                <div class="card-body">
                  <h4 class="card-title">${data.Name}</h4>
                  <h6 class="card-subtitle text-muted">${data.dev_gender}</h6>
                  <ul class="list-group">
                  <li class="list-item">${data.skill}</li>
                  </ul>
                </div>
              </div>
            </div>`;
});
