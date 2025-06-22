// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const M: any;

export function initMaterialSidenav() {
  nextTick(() => {
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, { draggable: true });

    // change position for navbar overlay
    const overlay = document.querySelector(".sidenav-overlay");
    const sidenav = document.querySelector(".sidenav");

    if (overlay && sidenav) {
      sidenav.parentNode?.insertBefore(overlay, sidenav);
    }
  });
}
