import { supabase } from './supabaseClient.js';

document.addEventListener('DOMContentLoaded', async () => {
  const { data: { session } } = await supabase.auth.getSession();
  const message = document.getElementById('login-message');
  const qrSection = document.getElementById('qr-section');

  if (session) {
    message.style.display = 'none';
    qrSection.style.display = 'flex';
  } else {
    message.innerText = '请先登录后再访问捐赠页面';
    qrSection.style.display = 'none';
  }
});