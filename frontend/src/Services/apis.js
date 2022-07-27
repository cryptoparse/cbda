import Cookies from "universal-cookie";

export function getUserData(callback) {
  const cookies = new Cookies();
  let authtok = cookies.get("bootstrapId");
  fetch("/getUserDetails/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      auth: authtok,
    }),
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      else return response.json();
    })
    .then((res) => {
      callback(res.userData);
    })

    .catch((err) => {
      console.log(err);
    });
}

export function createUser(callback, inputField) {
  const cookies = new Cookies();
  fetch("/eventuser/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: inputField.username,
      email: inputField.email,
      phone: inputField.phonenumber,
    }),
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      else return response.json();
    })
    .then((res) => {
      cookies.set("bootstrapId", res.bootstrapId, { path: "/" });
      callback();
    })

    .catch((err) => {
      console.log(err);
    });
}
