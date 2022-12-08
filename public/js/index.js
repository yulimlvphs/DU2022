const userNameElement = document.querySelector('.user-name');
const headerUserNameElement = document.querySelector('.user');
const localUserName = localStorage.getItem('userName');
const userNameBtn = document.querySelector('#name');

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