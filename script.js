const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const revealItems = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.88;

  revealItems.forEach((item) => {
    const boxTop = item.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      item.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

const modal = document.getElementById('projectModal');
const formButtons = document.querySelectorAll('.open-project-form');
const closeButtons = document.querySelectorAll('[data-close-modal]');
const projectForm = document.getElementById('projectForm');

const openModal = () => {
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
};

const closeModal = () => {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
};

formButtons.forEach((button) => {
  button.addEventListener('click', openModal);
});

closeButtons.forEach((button) => {
  button.addEventListener('click', closeModal);
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('open')) {
    closeModal();
  }
});

projectForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(projectForm);
  const name = formData.get('name')?.toString().trim() || 'Client';
  const email = formData.get('email')?.toString().trim() || 'No email provided';
  const company = formData.get('company')?.toString().trim() || 'Not provided';
  const projectType = formData.get('projectType')?.toString() || 'Not specified';
  const budget = formData.get('budget')?.toString() || 'Not specified';
  const timeline = formData.get('timeline')?.toString() || 'Not specified';
  const details = formData.get('details')?.toString().trim() || 'No details provided';

  const subject = encodeURIComponent(`Project Inquiry - ${projectType}`);
  const body = encodeURIComponent(
    `Hi Pranjul,\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Company: ${company}\n` +
      `Project Type: ${projectType}\n` +
      `Budget: ${budget}\n` +
      `Timeline: ${timeline}\n\n` +
      `Project Details:\n${details}`
  );

  window.location.href = `mailto:gpranjul07@gmail.com?subject=${subject}&body=${body}`;
  closeModal();
  projectForm.reset();
});
