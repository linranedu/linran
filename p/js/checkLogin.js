// checkLogin.js
import { supabase } from './supabaseClient.js';

// 检查用户是否已登录
async function checkLogin() {
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    // 用户未登录，弹出提示
    const login = confirm("您尚未登录，是否前往登录？");
    if (login) {
      window.location.href = "login.html"; // 修改为你的登录页面路径
    } else {
      window.history.back(); // 返回上一页
    }
  } else {
    // 用户已登录，可执行其他逻辑
    console.log("用户已登录:", session.user);
  }
}

document.addEventListener("DOMContentLoaded", checkLogin);