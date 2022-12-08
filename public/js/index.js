const userNameElement = document.querySelector('.user-name');
const headerUserNameElement = document.querySelector('.user');
const localUserName = localStorage.getItem('userName');

const setUserNameInnerHtml = (name) => {
    userNameElement.innerHTML = `${localStorage.getItem('userName')} <span>님</span>`;
    headerUserNameElement.innerHTML = `${localStorage.getItem('userName')} <span>님</span>`;
}
if(localUserName) {
    setUserNameInnerHtml(localUserName);
}
userNameElement.onclick = () => {
    const userName = prompt('이름을 입력해 주세요');
    localStorage.setItem('userName',userName);
    setUserNameInnerHtml(userName);
};