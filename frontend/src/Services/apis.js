import Cookies from "universal-cookie";

export function getUserData(callback) {
  const cookies = new Cookies();
  let authtok = cookies.get("bootstrapId");
  if (authtok == null) {
    alert("Not Registered");
    window.location.href = "/";
  }
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

export function fillP1(callback, inputField) {
  fetch("/p1form/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: inputField.email,
      q1: inputField.q1,
      q2: inputField.q2,
      q3: inputField.q3,
      q4: inputField.q4,
      q5: inputField.q5,
      q6: inputField.q6,
      q7: inputField.q7,
      q8: inputField.q8,
      q9: inputField.q9,
      q10: inputField.q10,
      q11: inputField.q11,
    }),
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      else return response.json();
    })
    .then((res) => {
      callback();
    })

    .catch((err) => {
      console.log(err);
    });
}
