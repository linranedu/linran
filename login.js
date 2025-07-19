import { supabase } from './supabaseClient.js';

function signInWithGitHub() {
  supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: 'https://sunland-eob.pages.dev'
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('login-btn');
  if (loginBtn) {
    loginBtn.addEventListener('click', signInWithGitHub);
  }
});
