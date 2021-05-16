const updateInfoApi = {
  update(data) {
    let { token } = JSON.parse(localStorage.getItem("data"));
    console.log(`token`, token);
    return fetch(
      "http://cfd-reactjs.herokuapp.com/elearning/v4/profile/update",
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
export default updateInfoApi;
