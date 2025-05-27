window.addEventListener("load", () => {
  const heading = document.querySelector(".mw-page-title-main");
  const paragraphs = document.querySelectorAll("p");

  if (!heading || paragraphs.length === 0) {
    console.warn("No heading or paragraph elements found.");
    return;
  }

  const text = Array.from(paragraphs)
    .map((p) => p.textContent)
    .join(" ");

  const wordMatchRegExp = /[^\s]+/g;
  const words = [...text.matchAll(wordMatchRegExp)];

  const wordCount = words.length;
  const readingTime = Math.ceil(wordCount / 200);

  const badge = document.createElement("p");
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  heading.insertAdjacentElement("afterend", badge);
});
