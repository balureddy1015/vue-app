const detailPage = {
    name: 'Detail',
    data() {
        return {
            modalStatus: false
        }
    },
    computed: {
        getProductDetail() {
            const localProductDetail = localStorage.getItem("productDetail");
            if (localProductDetail) {
                return JSON.parse(localProductDetail);
            }
            if (singleProductSelected) {
                localStorage.setItem(
                    "productDetail",
                    JSON.stringify(singleProductSelected)
                );
                return singleProductSelected;
            } else {
                return null;
            }
        }
    },
    template: `
    <div class="container">
    <div class="row" v-if="getProductDetail">
      <div class="col">
        <div class="card mb-3" style="max-width: 540px">
          <div class="row g-0">
            <div class="col" @click="modalStatus = true">
              <img
                :src="
                  getProductDetail.thumbnail
                    ? getProductDetail.thumbnail.href
                    : require('../assets/img/default.png')
                "
                class="img-fluid rounded-start clickable"
                :alt="
                  getProductDetail.hero ? getProductDetail.thumbnail.alt : ''
                "
              />
            </div>
            <div class="col">
              <div class="card-body">
                <h5 class="card-title">{{ getProductDetail.name }}</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorem enim et illum iste sit vero vitae voluptate. Assumenda
                  aut consequatur, esse fugiat magni nam officia qui? Cumque
                  molestiae perspiciatis sequi.
                </p>
                <p class="card-text" v-if="getProductDetail.price">
                  Regular:
                  <span class="strike"
                    >$ {{ getProductDetail.price.regular }}</span
                  >
                  <br />
                  Selling:
                  <strong>$ {{ getProductDetail.price.selling }}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-else>
      <div class="card">
        <div class="card-body">
          <p class="card-text">No Detail</p>
          <button class="btn btn-primary" @click="$router.push('/')">
            Go Back
          </button>
        </div>
      </div>
    </div>
    <modal-component :show-modal="modalStatus" @hideModal="modalStatus = false">
      <template v-slot:title>
        <h5 class="modal-title" id="exampleModalLabel"></h5>
      </template>
      <template v-slot:body>
        <div class="modal-body">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
            v-if="getProductDetail.images.length > 0"
          >
            <div class="carousel-inner">
              <div
                class="carousel-item"
                :class="ind == 0 ? 'active': ''"
                v-for="(item, ind) in getProductDetail.images"
                :key="ind"
              >
                <img
                  :src="
                    item.href ? item.href : require('../assets/img/default.png')
                  "
                  class="d-block w-100 img-fluid"
                  :alt="item.alt ? item.alt : ''"
                />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div class="text-info text-center" v-else>No Images to show</div>
        </div>
      </template>
    </modal-component>
  </div>
    `
};
