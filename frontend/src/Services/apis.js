import Cookies from "universal-cookie";
import { useLocation } from "react-router-dom";

export function getUserData(callback) {
  const cookies = new Cookies();
  let authtok = cookies.get("bootstrapId");
  if (authtok == null) {
    alert("Not Registered");
    window.location.href = "/";
  } else {
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
}

export async function createUser(callback, inputField) {
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
      cookies.set("bootstrapId", res.bootstrapId, {
        path: "/",
        maxAge: 1000000,
      });
      callback();
    })

    .catch((err) => {
      console.log(err);
    });
}

export async function savePhase1(callback, inputField) {
  fetch("/savePhase1/", {
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

export async function checkStage() {
  const cookies = new Cookies();
  let authtok = cookies.get("bootstrapId");
  if (authtok == null) {
    alert("Not Registered");
    window.location.href = "/";
  } else {
    fetch("/checkStage/", {
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
        const location = useLocation();
        const stage = res.stage;
        if (location.pathname != stage) {
          window.location.href = stage;
        }
      })

      .catch((err) => {
        console.log(err);
      });
  }
}

export async function setStage() {
  const cookies = new Cookies();
  const location = useLocation();
  const curStage = location.pathname;
  let authtok = cookies.get("bootstrapId");
  fetch("/setStage/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      auth: authtok,
      stage: cur,
    }),
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      else return response.json();
    })
    .then((res) => {})
    .catch((err) => {
      console.log(err);
    });
}

export async function getGroupNumber(callback, email) {
  fetch("/getGroupNumber/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      else return response.json();
    })
    .then((res) => {
      callback(res.groupno);
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function savePhase2Result(resultData) {
  fetch("/savePhase2Result/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(resultData),
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      else return response.json();
    })
    .then((res) => {
      window.location.href = "/resultQR";
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getResult(callback) {
  const cookies = new Cookies();
  let authtok = cookies.get("bootstrapId");
  fetch("/getResult/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ auth: authtok }),
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      else return response.json();
    })
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function makeGroups(callback) {
  fetch("/makeGroups/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
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

export async function eventuserstatus(callback) {
  fetch("/eventuserstatus/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      else return response.json();
    })
    .then((res) => {
      callback(res.userstatus);
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getallgroups(callback) {
  fetch("/getallgroups/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      else return response.json();
    })
    .then((res) => {
      callback(res.GroupList);
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getallusers(callback) {
  fetch("/getallusers/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      else return response.json();
    })
    .then((res) => {
      callback(res.UserList);
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function adminGetAccess(callback, username, password) {
  fetch("/adminGetAccess/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
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

export async function clearFlush(callback, inputField) {
  fetch("/clearFlush/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: inputField.username,
      password: inputField.password,
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

export async function checkGroupingDone(callback) {
  fetch("/checkGroupingDone/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      else return response.json();
    })
    .then((res) => {
      callback(res.Action);
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getAllResult(callback) {
  fetch("/getAllResult/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      else return response.json();
    })
    .then((res) => {
      callback(res.ResList);
    })
    .catch((err) => {
      console.log(err);
    });
}