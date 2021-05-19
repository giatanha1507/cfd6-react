const homeApi = {
  home() {
    return fetch("http://cfd-reactjs.herokuapp.com/elearning/v4/home", {}).then(
      (res) => res.json()
    );
  },
  course(slug) {
    return fetch(
      `http://cfd-reactjs.herokuapp.com/elearning/v4/course/${slug}`
    ).then((res) => res.json());
  },
};
export default homeApi;
