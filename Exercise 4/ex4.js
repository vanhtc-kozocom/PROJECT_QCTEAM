const validUser = {
  username: "admin",
  password: "admin"
}

function validateLogin(username, password){
  if (!username && !password){
    return {
      success: false,
      message: "Username is required" 
    }
  }
  if (!username){
    return {
      success: false,
      message: "Username is required" 
    }
  }
  if (!password){
    return {
      success: false,
      message: "Password is required" 
    }
  }
  return null

}

function login (username, password){
  const validation = validateLogin(username, password);
  if (validation) return validation;
  if (username === validUser.username && password !== validUser.password){
    return {
      success: false,
      message: "Invalid username or password" 
    }
  }
  if (username !== validUser.username ){
    return {
      success: false,
      message: "Invalid username or password"
    }
  }
  return {
    success: true,
    message: "Login successful" 
  }
}

function showMessage(msg, success) {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = msg;
  messageDiv.className = success ? "success" : "error";
}

function clearForm() {
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  const msg = document.getElementById("message");
  msg.textContent = "";
  msg.className = "";
}

function runAllTests(testCases) {
  const testResults = []; // <-- thêm đây

  for (let caseIndex = 0; caseIndex < testCases.length; caseIndex++) {
    setTimeout(function () {
      const tc = testCases[caseIndex];

      document.getElementById("username").value = tc.username;
      document.getElementById("password").value = tc.password;

      const result = login(tc.username, tc.password);

      showMessage(result.message, result.success);

      const pass =
        result.success === tc.expected &&
        result.message === tc.expectedMessage;

      // Thay console.log bằng push vào testResults
      testResults.push({
        TC: caseIndex + 1,
        Username: tc.username,
        Password: tc.password,
        Expected: tc.expected,
        "Expected Message": tc.expectedMessage,
        Actual: result.success,
        "Actual Message": result.message,
        Pass: pass,
      });

      setTimeout(clearForm, 500);

      // Hiển thị bảng khi chạy xong tất cả TC
      if (caseIndex === testCases.length - 1) {
        setTimeout(() => {
          console.table(testResults); // <-- log bảng ở đây
          alert("Run done TCs");
        }, 600);
      }
    }, caseIndex * 1000);
  }
}
function fetchData (){
  
}
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const u = document.getElementById("username").value.trim();
  const p = document.getElementById("password").value.trim();
  const result = login(u, p);
  showMessage(result.message, result.success);
});

document.getElementById("clearFormBtn").addEventListener("click", clearForm);


document.getElementById("runTestsBtn").addEventListener("click", function () {
  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      const testCases = data.loginUsers; 
      runAllTests(testCases);            
    })
    .catch(err => console.error("Load data.json: fail", err));
});