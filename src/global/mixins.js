export const mixinSubmit = {
  methods: {
    submit(submitApi) {
      let data = this.formData
      if (this.$validate(data)) {
        this.$http[submitApi](data).then(res => {
          console.log(res)
        })
      }
    }
  }
}
