function pointCabinet(event) {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const percentX = (event.clientX / viewportWidth).toFixed(2);
  const percentY = (event.clientY / viewportHeight).toFixed(2);
  const cabinet = document.querySelector(".cabinet-body");
  cabinet.style.transform = `rotateX(${
    15 * (1.25 * percentY - 1) * -1 - 30
  }deg) rotateY(${22.5 * (2 * percentX - 1)}deg)`;
}

function openDrawer(drawer) {
  const shadow = drawer.querySelector(".shadow");
  const isOpen = drawer.classList.toggle("open");
  setTimeout(
    () => {
      drawer.classList.toggle("closed");
      shadow.style.backgroundColor = "black";
    },
    isOpen ? 0 : 600
  );
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
