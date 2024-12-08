function openTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');
    tabs.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(button => button.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

function adjustTransparency(value) {
    const image = document.querySelector('.overlay-image');
    image.style.opacity = value / 100;
}

function editDatabase() {
    alert('Edit Database button clicked!');
}
