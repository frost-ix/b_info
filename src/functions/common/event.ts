import router from "@/router";

function returnPage(pathName: string) {
  router.push({
    name: pathName,
  });
}

// tailwindcss 다크모드 토글 함수
function toggleDarkMode() {
  var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
  var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

  // Change the icons inside the button based on previous settings
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    themeToggleLightIcon?.classList.remove("hidden");
  } else {
    themeToggleDarkIcon?.classList.remove("hidden");
  }

  var themeToggleBtn = document.getElementById("theme-toggle");

  themeToggleBtn?.addEventListener("click", function () {
    // toggle icons inside button
    themeToggleDarkIcon?.classList.toggle("hidden");
    themeToggleLightIcon?.classList.toggle("hidden");

    // if set via local storage previously
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  });
}

// 페이지 로드 시 저장된 테마 적용
function applySavedTheme() {
  const theme = localStorage.getItem("color-theme");
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export { returnPage, toggleDarkMode, applySavedTheme };
