const contactApi = {
  contact(form) {
    return fetch("http://cfd-reactjs.herokuapp.com/elearning/v4/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((res) => res.json());
  },
};
export default contactApi;
