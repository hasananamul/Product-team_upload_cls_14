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
  let dev_img = this.querySelector('input[name="img"]').value;
  let dev_gender = this.querySelector('input[name="gender"]:checked').value;
  let dev_skill = this.querySelectorAll('input[type="checkbox"]:checked');

  let dev_skill_arr = [];

  for (let i = 0; i < dev_skill.length; i++) {
    dev_skill_arr.push(dev_skill[i].value);
  }

  let devs_data;

  if (get_data("devs")) {
    devs_data = get_data("devs");
  } else {
    devs_data = [];
  }

  devs_data.push({
    Name: dev_name,
    Image: dev_img,
    Skill: dev_skill_arr,
    Gender: dev_gender,
  });

  set_data("devs", devs_data);
  console.log(devs_data);
  all_data();
});
all_data();
function all_data() {
  let all_devs = get_data("devs");

  let data_div = "";
  all_devs.map((data) => {
    let list = "";
    data.Skill.map((li) => {
      list += `<li class="list-group-item"> <i class="text-success fa fa-hand-o-right" aria-hidden="true"></i> ${li} </li>`;
    });
    data_div += ` <div class="col-md-4">
          <div class="my-3 card shadow">

            <div class="card-img">
              <img
                class="card-img-top"
                src="${data.Image}"
              />
            </div>
            <div class="card-body">
              <h4 class="card-title text-capitalize"> ${data.Name}</h4>
              <h6 class="card-subtitle text-muted"> Gender : ${data.Gender}</h6>
              <ul class="list-group">
              <strong> Your Skill's </strong>
              ${list}
              </ul>
            </div>
          </div>
        </div> `;
  });
  team_section.innerHTML = data_div;
}
