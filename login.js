function outDate() {
  const today = new Date("2022-08-13");
  function isWeekend(date = new Date()) {
    return date.getDay() === 6;
  }
  const validate = isWeekend(today);

  return validate;
}
console.log(outDate());
if (outDate()) {
  document.getElementById("outdate").style.display = "none";
  document.getElementById("portal").style.display = "block";
} else {
  document.getElementById("outdate").style.display = "block";
  document.getElementById("portal").style.display = "none";
}

function validate() {
  if (isEmpty()) {
    return false;
  } else if (pass()) {
    return false;
  } else {
  }
}

// function isEmpty() {
//   let p = document.getElementById("pass").value;

//   if (p == "") {
//     alert("Enter Your Password ");
//     return false;
//   }
// }

function validate() {
  if (isEmpty() == false) {
    return false;
  } else if (pass() == false) {
    return false;
  }
}

//  (data.filter((item)=>item .passsword ==="pass"))

function isEmpty() {
  let data_one="vivek";
  let data_two="tayde";

  let p = document.getElementById("pass").value;
   if (p == "") {
    alert("Please Enter Your Password ");
    return false;
  }
  else if(p==data_one || p ==data_two)
  {
    alert("login success");
     window.location.href="./topic.html"
  } 
  else {
    alert("login failed");
    // window.location.href="./login.html"
  }
}

//   if (confirm("have you submit the assignment today? 'OK' means YES, and 'Cancel' means No")) {
//     document.getElementById("submit").disabled = true;
//   } else {
//     document.getElementById("submit").disabled = false;
//   }

// function pass() {
//   let password = document.getElementById("submit").value;

//   if (
//     confirm(
//       "have you submit the assignment today? 'OK' means YES, and 'Cancel' means No"
//     )
//   ) {
//     alert(
//       "You have already submited the assignment once today, come back on saturday"
//     );
//     return false;
//   } else {
//     document.getElementById("submit").disabled = false;
//   }
// }


// if (data.filter((ele) => ele.passsword === p)) {
//   alert("pass success");
// }