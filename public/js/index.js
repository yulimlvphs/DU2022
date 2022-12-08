const userNameElement = document.querySelector('.user-name');
const headerUserNameElement = document.querySelector('.user');
const localUserName = localStorage.getItem('userName');
const userNameBtn = document.querySelector('#name');
const usernumber = document.querySelector('#user-number');
const localusernumber = localStorage.getItem('inputUsernumber');
const userEmail = document.querySelector('#user-email');
const localuserEmail = localStorage.getItem('inpuUuserEmail');

const setUserNameInnerHtml = (name) => {
    userNameElement.innerHTML = `${name} <span>님</span>`;
    userNameBtn.textContent = name;
   // headerUserNameElement.innerHTML = `<span id = 'name'> ${name}</span> <span>님</span>`;
}
if(localUserName) {
    setUserNameInnerHtml(localUserName);
}
userNameElement.onclick = () => {
    const userName = prompt('이름을 입력해 주세요');
    localStorage.setItem('userName',userName);
    setUserNameInnerHtml(userName);
};

usernumber.onclick = () => {
    const inputUsernumber = prompt('학번 입력 -->>');
    localStorage.setItem('usernumber',inputUsernumber);
    setUserNameInnerHtml(usernumber);
};  