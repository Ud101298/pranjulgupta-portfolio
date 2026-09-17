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

// Replace the value below with your Formspree form endpoint, e.g.
// 'https://formspree.io/f/mnqlkzqp' (you get this when you create a form at https://formspree.io)
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnpnqdjo';

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

projectForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(projectForm);
  const payload = {
    name: formData.get('name')?.toString().trim() || 'Client',
    email: formData.get('email')?.toString().trim() || 'No email provided',
    company: formData.get('company')?.toString().trim() || 'Not provided',
    projectType: formData.get('projectType')?.toString() || 'Not specified',
    budget: formData.get('budget')?.toString() || 'Not specified',
    timeline: formData.get('timeline')?.toString() || 'Not specified',
    details: formData.get('details')?.toString().trim() || 'No details provided',
  };

  // POST to Formspree (replace FORMSPREE_ENDPOINT with your real endpoint)
  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      // success
      closeModal();
      projectForm.reset();
      alert('Thanks — your inquiry was sent successfully.');
    } else {
      // server returned an error; fallback to mailto so user can still contact you
      alert('Failed to send via Formspree. Opening email client as fallback.');
      const subject = encodeURIComponent(`Project Inquiry - ${payload.projectType}`);
      const body = encodeURIComponent(
        `Hi Pranjul,\n\nName: ${payload.name}\nEmail: ${payload.email}\nCompany: ${payload.company}\nProject Type: ${payload.projectType}\nBudget: ${payload.budget}\nTimeline: ${payload.timeline}\n\nProject Details:\n${payload.details}`
      );
      window.location.href = `mailto:gpranjul07@gmail.com?subject=${subject}&body=${body}`;
    }
  } catch (err) {
    // network error; fallback to mailto
    alert('Network error while sending inquiry. Opening email client as fallback.');
    const subject = encodeURIComponent(`Project Inquiry - ${payload.projectType}`);
    const body = encodeURIComponent(
      `Hi Pranjul,\n\nName: ${payload.name}\nEmail: ${payload.email}\nCompany: ${payload.company}\nProject Type: ${payload.projectType}\nBudget: ${payload.budget}\nTimeline: ${payload.timeline}\n\nProject Details:\n${payload.details}`
    );
    window.location.href = `mailto:gpranjul07@gmail.com?subject=${subject}&body=${body}`;
  }
});
