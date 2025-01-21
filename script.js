function pointCabinet(event) {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const percentX = (event.clientX / viewportWidth).toFixed(2);
  const percentY = (event.clientY / viewportHeight).toFixed(2);
  const cabinet = document.querySelector(".cabinet-body");
  cabinet.style.transform = `rotateX(${
    22.5 * (2 * percentY - 1) * -1
  }deg) rotateY(${45 * (2 * percentX - 1)}deg)`;
}

function openDrawer(drawer) {
  drawer.classList.toggle("open")
}

document.addEventListener("mousemove", function (event) {
  pointCabinet(event);
});

const drawers = document.querySelectorAll(".cabinet-drawer");

drawers.forEach((drawer) => {
  drawer.addEventListener("click", () => {
    openDrawer(drawer);
  });
});
