const authApi = {
  login(form) {
    // console.log(`form o api`, form);
    return fetch("http://cfd-reactjs.herokuapp.com/elearning/v4/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((res) => res.json());
  },
};
export default authApi;
