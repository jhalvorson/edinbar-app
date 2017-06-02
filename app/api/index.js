function Api() {

  this.get = ref => (
    new Promise((resolve, reject) => {
      fetch(ref)
      .then((response) => { return response.json() } )
      .catch((error) => console.warn("fetch error:", error))
      .then((response) => {
        console.log(response)
      })
    })
  );

  this.getBars = () => {
    new Promise((resolve, reject) => {
      this.get('https://css-tricks.com/wp-json/wp/v2/posts')
      .then((items) => console.log(items))
      .catch(reject)
    })
  }

}

export default new Api();
