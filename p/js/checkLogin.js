// checkLogin.js
import { supabase } from './supabaseClient.js';

async function checkLogin() {
  try {
    const { data, error } = await supabase.auth.getUser();

    if (error || !data.user) {
      // 用户未登录
      const login = confirm("您尚未登录，是否前往登录？");
      if (login) {
        window.location.href = "login.html"; // 替换为你的登录页面路径
      } else {
        window.location.href = "index.html";
      }
    } else {
      // 用户已登录
      console.log("用户已登录：", data.user);
    }
  } catch (err) {
    console.error("获取登录状态失败：", err);
    alert("检查登录状态时出错，请稍后重试。");
  }
}

document.addEventListener("DOMContentLoaded", checkLogin);