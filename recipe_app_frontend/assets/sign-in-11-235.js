(function(){
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const toggleBtn = document.getElementById('togglePassword');
  const pwPlaceholder = document.getElementById('pw-placeholder');
  const cta = document.getElementById('cta-sign-in');

  if (window.App) {
    App.togglePassword(password, toggleBtn);
    App.attachPlaceholderSync(password, pwPlaceholder);
  }

  // Basic validation placeholder: prevent submit if empty
  cta && cta.addEventListener('click', function(){
    const errors = [];
    if (!email || !email.value) errors.push('Email is required');
    if (!password || !password.value) errors.push('Password is required');
    if (errors.length) {
      alert(errors.join('\\n'));
    } else {
      // Stub: perform sign-in
      alert('Sign in clicked');
    }
  });
})();
