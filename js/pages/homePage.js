const homePage = {
    name: 'Home',
    data() {
        return {
            givenApiData: apiData
        }
    },
    methods: {
        goToDetail(item) {
            localStorage.setItem("productDetail", JSON.stringify(item));
            singleProductSelected = item;
            const name = item.name.replaceAll(" ", "-");
            console.log(name);
            this.$router.push("/detail/" + name);
        }
    },
    mounted() {
        console.log(this.givenApiData);
    },
    template: `
    <div class="container">
        <div class="row" v-if="givenApiData">
      <div
        class="col-lg-4 mb-3"
        v-for="(item, ind) in givenApiData.groups"
        :key="ind"
      >
        <div class="card h-100">
          <img
            :src="
              item.hero ? item.hero.href : '/img/default.png'
            "
            class="card-img-top"
            @click="goToDetail(item)"
            :alt="item.hero ? item.hero.alt : ''"
          />
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text" v-if="item.price">
              Regular: <span class="strike">$ {{  item.price.regular }}</span>
              <br />
              Selling: <strong>$ {{ item.price.selling}}</strong>
            </p>
            <button href="#" class="btn btn-primary" @click="goToDetail(item)">
              Detail
            </button>
          </div>
        </div>
      </div>
    </div>
</div>
        </div>
    </div>
    `
};
