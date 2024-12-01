document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.wrapper')
  const signupLink = document.querySelector('.signup-link')
  const loginLink = document.querySelector('.login-link')

  const toggleForm = (isSignup) => {
    wrapper.classList.toggle('active', isSignup)
  }

  signupLink?.addEventListener('click', (e) => {
    e.preventDefault()
    toggleForm(true)
  })

  loginLink?.addEventListener('click', (e) => {
    e.preventDefault()
    toggleForm(false)
  })
})
