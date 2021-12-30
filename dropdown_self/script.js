const dropdown = document.querySelector(".dropdown");
const toggleBtn = document.querySelector(".dropdown-toggle");
const menu = document.querySelector(".dropdown-menu");
const options = document.querySelectorAll(".dropdown-option");
const submit = document.querySelector(".next-button");

// 'dropdownBtn'을 클릭하면, 'menu'가 나온다. 
toggleBtn.addEventListener('click', () => {
  menu.classList.toggle("show");
  // CSS의 dropdown-menu.show 활성화
});

toggleBtn.addEventListener('blur', () => { //focus가 해제되는 순간 == blur
  menu.classList.remove("show"); // .show 비활성화
})

options.forEach((item) => { // 각 리스트를 클릭하면
  item.addEventListener('click', (e) => {
    toggleBtn.classList.add("selected"); // 초기 지점선택 버튼 .selected 활성화
    const listLabel = e.currentTarget.textContent.trim();
    // 선택한 리스트의 텍스트를 변수에 담아줌. trim()은 공백을 뺴주는 메서드 
    toggleBtn.innerHTML = listLabel;
    submit.disabled = false;
  }); 
});
  
