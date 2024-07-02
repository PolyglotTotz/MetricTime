(function replitBadge() {
  // Fetch the script element that includes this script
  const scriptElement = document.currentScript;

  // Get attributes from the script tag
  const theme = scriptElement.getAttribute("theme") || "dark";
  const position = scriptElement.getAttribute("position") || "bottom-left";

  // Load Baloo font from Google Fonts
  const fontLink = document.createElement("link");
  fontLink.href = "https://fonts.googleapis.com/css2?family=Baloo&display=swap";
  fontLink.rel = "stylesheet";
  document.head.appendChild(fontLink);

  // Define positions
  const offset = "1.5rem";
  const validPositions = {
    "top-left": { top: offset, left: offset },
    "top-right": { top: offset, right: offset },
    "bottom-left": { bottom: offset, left: offset },
    "bottom-right": { bottom: offset, right: offset },
  };

  // Ensure positions are valid
  if (!validPositions.hasOwnProperty(position)) {
    console.warn(
      `${position} is not a valid position, defaulting to bottom-left`,
    );
    position = "bottom-left";
  }

  // Create link & styles
  const badgeAnchor = document.createElement("a");
  Object.assign(badgeAnchor, {
    target: "_blank",
    href: "https://dadyears.art",
  });

  // Create badge text & styles
  const badgeText = document.createElement("div");
  badgeText.textContent = "DAD YEARS";
  badgeText.id = "replitBadge";
  Object.assign(badgeText.style, validPositions[position]);

  // Inject styles
  document.head.insertAdjacentHTML(
    "beforeend",
    `
    <style>
      #replitBadge {
        position: fixed;
        cursor: pointer;
        z-index: 100;
        transition: transform 100ms ease-in-out;
        background-color: ${theme === "dark" ? "#333" : "#fff"};
        color: ${theme === "dark" ? "#fff" : "#000"};
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        font-family: 'Baloo', sans-serif;
        font-size: 1.5rem;
        text-align: center;
      }

      #replitBadge:hover {
        transform: scale(1.05);
      }

      @media (max-width: 600px) {
        #replitBadge {
          font-size: 1rem;
          padding: 0.25rem 0.5rem;
          ${position.includes("bottom") ? "bottom: 1rem !important" : "top: 1rem !important"};
          ${position.includes("right") ? "right: 1rem !important" : "left: 1rem !important"};
        }
      }
    </style>
  `,
  );

  // Append badge to page
  badgeAnchor.appendChild(badgeText);
  document.body.appendChild(badgeAnchor);
})();
