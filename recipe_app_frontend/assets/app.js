(function(){
  // Generic helpers that can be used by multiple screens
  window.App = window.App || {};

  App.togglePassword = function(inputEl, btnEl) {
    if (!inputEl || !btnEl) return;
    btnEl.addEventListener('click', function(){
      const type = inputEl.getAttribute('type') === 'password' ? 'text' : 'password';
      inputEl.setAttribute('type', type);
      btnEl.setAttribute('aria-label', type === 'password' ? 'Show password' : 'Hide password');
      btnEl.textContent = type === 'password' ? '👁️' : '🙈';
    });
  };

  App.attachPlaceholderSync = function(inputEl, placeholderSpan) {
    if (!inputEl || !placeholderSpan) return;
    const sync = () => {
      placeholderSpan.style.display = inputEl.value ? 'none' : 'block';
    };
    inputEl.addEventListener('input', sync);
    inputEl.addEventListener('focus', sync);
    inputEl.addEventListener('blur', sync);
    sync();
  };
})();
