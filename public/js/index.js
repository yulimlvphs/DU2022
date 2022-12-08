// const userNameElement = document.querySelector('.user-name');
const headerUserNameElement = document.querySelector('.user');
const userNameBtn = document.querySelector('#myname');
const localUserName = localStorage.getItem('userName');
const usernumber = document.querySelector('#number');
const localusernumber = localStorage.getItem('inputUsernumber');
const userEmail = document.querySelector('#email');
const localuserEmail = localStorage.getItem('inputuserEmail');

const setUserNameInnerHtml = (name) => {
    headerUserNameElement.innerHTML = `${name} <span>님</span>`;
    userNameBtn.textContent = name;
   // headerUserNameElement.innerHTML = `<span id = 'name'> ${name}</span> <span>님</span>`;
};
const setUsernumberInnerHtml = (number) => {
    usernumber.textContent = number;
   // headerUserNameElement.innerHTML = `<span id = 'name'> ${name}</span> <span>님</span>`;
};

const setuserEmailInnerHtml = (email) => {
    userEmail.textContent = email;
   // headerUserNameElement.innerHTML = `<span id = 'name'> ${name}</span> <span>님</span>`;
};

if(localUserName) {
    setUserNameInnerHtml(localUserName);
}
if(localusernumber) {
    setUsernumberInnerHtml(localusernumber);
}
if(localuserEmail) {
    setuserEmailInnerHtml(localuserEmail);
}

userNameBtn.onclick = () => {
    const userName = prompt('이름을 입력해 주세요');
   
    localStorage.setItem('userName',userName);
    setUserNameInnerHtml(userName);
};

usernumber.onclick = () => {
    const inputUsernumber = prompt('학번 입력 -->>');
    const num = Number(inputUsernumber);

    if (num.length <= 9) {
      alert('학번은 9자리를 입력하여 주세요.');
      return false;
    }
    localStorage.setItem('inputUsernumber',inputUsernumber);
    setUsernumberInnerHtml(inputUsernumber);
};  

userEmail.onclick = () => {
    const inputuserEmail = prompt('이메일 입력 -->>');
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var email = document.getElementById('inputuserEmail').value;
if (email == '' || !re.test($email)) {
alert("올바른 이메일 주소를 입력하세요")
return false;
}

    localStorage.setItem('inputuserEmail',inputuserEmail);
    setuserEmailInnerHtml(inputuserEmail);
};  

