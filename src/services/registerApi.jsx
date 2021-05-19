const registerApi = {
  register(data, slug) {
    let { token } = JSON.parse(localStorage.getItem("data"));
    return fetch(
      `http://cfd-reactjs.herokuapp.com/elearning/v4/course-register/${slug}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.accessToken}`,
        },
        body: JSON.stringify(data),
      }
    ).then((res) => res.json());
  },
};
export default registerApi;
