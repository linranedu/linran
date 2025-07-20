import { supabase } from './supabaseClient.js';

// 登录逻辑
function signInWithGitHub() {
  supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: 'https://sunland-eob.pages.dev/donate.html'
    }
  });
}

// 登出逻辑
function signOut() {
  supabase.auth.signOut().then(() => {
    location.reload();
  });
}

// 登录状态渲染
async function updateAuthUI() {
  const {
    data: { session }
  } = await supabase.auth.getSession();

  const loginBtn = document.getElementById('login-btn');
  const logoutBtn = document.getElementById('logout-btn');
  const userInfo = document.getElementById('user-info');
  const userEmailSpan = document.getElementById('user-email');

  if (session && session.user) {
    // 已登录
    loginBtn.style.display = 'none';
    userInfo.style.display = 'block';
    userEmailSpan.textContent = session.user.email;
  } else {
    // 未登录
    loginBtn.style.display = 'block';
    userInfo.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  document.getElementById('login-btn')?.addEventListener('click', signInWithGitHub);
  document.getElementById('logout-btn')?.addEventListener('click', signOut);

  await updateAuthUI();
});