import router from "@/router";

function returnPage(pathName: string) {
  router.replace({
    name: pathName,
  });
}

/**
 * 저장된 테마를 불러와 body에 적용하고, 다크 모드 여부를 반환합니다.
 * @returns {boolean} 다크 모드이면 true, 아니면 false
 */
function loadTheme(): boolean {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    return true;
  } else {
    document.body.classList.remove("dark-theme");
    return false;
  }
}

/**
 * 라이트/다크 테마를 토글하고, 변경된 다크 모드 상태를 반환합니다.
 * @returns {boolean} 변경 후 다크 모드이면 true, 아니면 false
 */
function toggleThemeSys(): boolean {
  const isDark = document.body.classList.toggle("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  return isDark;
}

export { returnPage, toggleThemeSys, loadTheme };
