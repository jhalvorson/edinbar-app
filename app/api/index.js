function Api() {

  this.get = (v, ref) => (
    new Promise((resolve, reject) => {
      fetch(`https://edinbar-dashboard.halvorson.co.uk/api/${v}/${ref}`)
        .then((response) => {
          resolve(response.json());
        }, error => reject(error) );
    })
  );

  this.getBarsAPI = () => (
    new Promise((resolve, reject) => {
      this.get('v1','bars')
        .then(items => resolve(items))
        .catch(reject);
    })
  );

  this.searchAPI = (text) => (
    new Promise((resolve, reject) => {
      this.get('v1',`search?q=${text}`)
        .then(items => resolve(items))
        .catch(reject);
    })
  );

}

export default new Api();
