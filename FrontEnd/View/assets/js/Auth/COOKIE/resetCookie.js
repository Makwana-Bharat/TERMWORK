const resetCookie = (name) => {
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() - 1);
  const cookieString = `${name}=null; expires=${expirationDate.toUTCString()}; path=/`;
  document.cookie = cookieString;
  window.location.href = "../../";
}
