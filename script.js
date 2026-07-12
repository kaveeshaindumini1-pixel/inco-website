// ── Posture visualiser ────────────────────────────────────────────
function setPosture(type) {
  const spine   = document.getElementById('spine');
  const angle   = document.getElementById('angle-display');
  const status  = document.getElementById('status-badge');
  const stext   = document.getElementById('status-text');
  const vib     = document.getElementById('vib-flash');

  if (type === 'bad') {
    spine.style.transform = 'rotate(20deg)';
    angle.textContent = '29°';
    angle.style.color = '#FF4444';
    status.className = 'device-status bad';
    stext.textContent = 'Poor posture — alert!';
    vib.classList.add('show');

    let v = 0;
    const shake = setInterval(() => {
      spine.style.transform = v % 2 === 0 ? 'rotate(22deg)' : 'rotate(18deg)';
      v++;
      if (v > 5) { clearInterval(shake); spine.style.transform = 'rotate(20deg)'; }
    }, 100);

  } else {
    spine.style.transform = 'rotate(0deg)';
    angle.textContent = '8°';
    angle.style.color = '#3B82F6';
    status.className = 'device-status good';
    stext.textContent = 'Good posture';
    vib.classList.remove('show');
  }
}

// Auto demo loop
let demoPhase = false;
setInterval(() => {
  demoPhase = !demoPhase;
  setPosture(demoPhase ? 'bad' : 'good');
}, 4000);


// ── FAQ accordion ─────────────────────────────────────────────────
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');

  // close all
  document.querySelectorAll('.faq-q').forEach(q => {
    q.classList.remove('open');
    q.nextElementSibling.classList.remove('open');
  });

  // open this one if it was closed
  if (!isOpen) {
    btn.classList.add('open');
    answer.classList.add('open');
  }
}


// ── Order plan selector ───────────────────────────────────────────
const currentPlan = 'standard';



// ── Order form submission ─────────────────────────────────────────
function submitOrder(e) {
  e.preventDefault();

  const name     = document.getElementById('f-name').value.trim();
  const phone    = document.getElementById('f-phone').value.trim();
  const email    = document.getElementById('f-email').value.trim();
  const address  = document.getElementById('f-address').value.trim();
  const district = document.getElementById('f-district').value;

  if (!name || !phone || !email || !address || !district) {
    alert('Please fill in all required fields.');
    return;
  }

  // In production: replace this with a fetch() to your backend / Formspree / EmailJS
  console.log('Order submitted:', {
    plan: currentPlan,
    name, phone, email, address, district,
    notes: document.getElementById('f-notes').value
  });

  // Show success
  document.getElementById('order-form').style.display = 'none';
  document.querySelector('.order-summary').style.display = 'none';
  document.getElementById('order-success').style.display = 'block';
  document.getElementById('order-success').scrollIntoView({ behavior: 'smooth' });
}


// ── Smooth scroll nav ─────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// ── Navbar scroll shadow ──────────────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 40) {
    nav.style.borderBottomColor = 'rgba(59, 130, 246,0.1)';
  } else {
    nav.style.borderBottomColor = 'rgba(255,255,255,0.08)';
  }
});
