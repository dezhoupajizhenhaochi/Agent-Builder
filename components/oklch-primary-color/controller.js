/*
 * OKLCH Primary Color component
 *
 * Integration contract:
 * - The host page provides `state.primary`, `commitColor`, `clamp`,
 *   `updateSliderGradients`, `syncColorFromHex`, and `$`.
 * - The component markup is inserted beside `.color-swatch-large`.
 */
(function setupOklchPrimaryColor(host) {
  if (!host || typeof window.commitColor !== 'function') return;

  const $ = selector => host.querySelector(selector);
  const popover = $('#primary-color-popover');
  const plane = $('#primary-color-plane');
  let planeDragging = false;

  const updateFromPlane = event => {
    if (!plane) return;
    const rect = plane.getBoundingClientRect();
    const x = clamp((event.clientX - rect.left) / rect.width, 0, 1);
    const y = clamp((event.clientY - rect.top) / rect.height, 0, 1);
    window.commitColor(1 - y, x * .4, window.state.primary.H, 'plane');
  };

  host.querySelector('.color-swatch-large')?.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    popover?.classList.toggle('show');
  });

  $('#primary-color-popover-close')?.addEventListener('click', event => {
    event.stopPropagation();
    popover?.classList.remove('show');
  });

  plane?.addEventListener('pointerdown', event => {
    planeDragging = true;
    plane.setPointerCapture(event.pointerId);
    updateFromPlane(event);
  });
  plane?.addEventListener('pointermove', event => {
    if (planeDragging) updateFromPlane(event);
  });
  plane?.addEventListener('pointerup', event => {
    planeDragging = false;
    plane.releasePointerCapture(event.pointerId);
  });

  ['L', 'C', 'H'].forEach(key => {
    const lower = key.toLowerCase();
    const slider = $(`#lch-${lower}`);
    const number = $(`#lch-${lower}-num`);
    const onChange = (value, source) => {
      const { L, C, H } = window.state.primary;
      window.commitColor(
        key === 'L' ? parseFloat(value) : L,
        key === 'C' ? parseFloat(value) : C,
        key === 'H' ? parseFloat(value) : H,
        source
      );
    };
    slider?.addEventListener('input', event => onChange(event.target.value, `${lower}-slider`));
    number?.addEventListener('input', event => onChange(event.target.value, `${lower}-num`));
  });
})(document);
