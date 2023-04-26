export default class UserInfo {
    constructor(selectors) {
        this._description = document.querySelector(selectors['description'])
        this._name = document.querySelector(selectors['name'])
    }

    getUserInfo() {
        return {
            description:this._description.textContent,
            name:this._name.textContent
        }
    }

    setUserInfo(newInfo) {
        this._description.textContent = newInfo.description
        this._name.textContent = newInfo.name
    }
}