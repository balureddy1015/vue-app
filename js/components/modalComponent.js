Vue.component('modal-component', {
    props: ['showModal'],
    watch: {
        showModal(newValue, oldValue) {
            // console.log("showModal", newValue, oldValue);
            if (newValue) {
                this.myModal.show();
            }
        },
    },
    mounted() {
        this.myModal = new bootstrap.Modal(this.$refs.exampleModal)
    },
    methods: {
        closeModal() {
            if (this.myModal) {
                this.myModal.hide();
                this.$emit('hideModal');
            }
        }
    },
    template: `
    <div>
    <!-- Modal -->
    <div
      class="modal fade"
      ref="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <slot name="title"></slot>
            <button
              type="button"
              class="btn-close"
              @click="closeModal()"
              aria-label="Close"
            ></button>
          </div>
          <slot name="body"></slot>
        </div>
      </div>
    </div>
  </div>
    `
})
