function stringToRGB(tag) {
    let hash = 0;
    for (let i = 0; i < tag.length; i++) {
        hash = tag.charCodeAt(i) + ((hash << 5) - hash); // Simple hashing
    }

    const c = (hash & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();

    const code = "00000".substring(0, 6 - c.length) + c;

    return code
}

document.addEventListener("DOMContentLoaded", function() {
    const tags = document.querySelectorAll('[data-tag]');
    tags.forEach(tagElem => {
        const tag = tagElem.getAttribute('data-tag');
        tagElem.style.backgroundColor = "#" + stringToRGB(tag);
    });
});


