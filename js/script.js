// What you can't see matters.
const tabs = document.querySelector('.tab-btns');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabItems = document.querySelectorAll('.tab-item');

const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', (e) => {
  btn.classList.toggle('open');
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
});

tabs.addEventListener('click', (e) => {
  e.preventDefault();
  const clicked = e.target.closest('.tab-btn');
  if (!clicked) return;

  // Deactivate All Items
  tabBtns.forEach((tabBtn) => tabBtn.classList.remove('text-primaryDark', 'font-semibold'));
  tabItems.forEach((tabItem) => tabItem.classList.add('hidden'));

  // Active New Item
  const tabData = e.target.dataset.tab;
  clicked.classList.add('text-primaryDark', 'font-semibold');
  document.querySelector(`.tab-item-${tabData}`).classList.remove('hidden');
});

// FAQs Accordion

const accordionHeaders = document.querySelectorAll('.accordion__header');

accordionHeaders.forEach((accordionHeader) => {
  accordionHeader.addEventListener('click', (e) => {
    const activeAccordion = document.querySelector('.accordion__header.active');

    if (activeAccordion && activeAccordion !== accordionHeader) {
      activeAccordion.classList.remove('active');
      activeAccordion.nextElementSibling.style.maxHeight = 0;
    }

    accordionHeader.classList.toggle('active');
    const accordionBody = accordionHeader.nextElementSibling;
    if (accordionHeader.classList.contains('active')) {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
    } else {
      accordionBody.style.maxHeight = 0;
    }

    console.log(accordionBody);
  });
});
