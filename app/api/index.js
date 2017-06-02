function Api() {

  this.get = (v, ref) => (
    new Promise((resolve, reject) => {
      fetch(`http://localhost:7777/api/${v}/${ref}`)
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

}

export default new Api();
