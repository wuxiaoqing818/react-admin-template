/*
 * @Author: 吴晓晴
 * @Date: 2021-06-06 17:33:26
 * @LastEditTime: 2021-06-06 19:17:40
 * @FilePath: \webDevelopment\blogDev\jspang-blog\react-blog\admin-template\src\mock\index.js
 */
import Mock from "mockjs";
import loginAPI from "./login";

// 登录与用户相关
Mock.mock(/\/login/, "post", loginAPI.login);
Mock.mock(/\/logout/, "post", loginAPI.logout);
Mock.mock(/\/userInfo/, "post", loginAPI.userInfo);
Mock.mock(/\/user\/list/, "get", loginAPI.getUsers);
Mock.mock(/\/user\/delete/, "post", loginAPI.deleteUser);
Mock.mock(/\/user\/edit/, "post", loginAPI.editUser);
Mock.mock(/\/user\/validatUserID/, "post", loginAPI.ValidatUserID);
Mock.mock(/\/user\/add/, "post", loginAPI.addUser);


export default Mock;
