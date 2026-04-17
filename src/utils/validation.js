export function validateEmail(email) {
  if (!email) return { valid: true, message: "" };
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    return { valid: false, message: "Nieprawidłowy format adresu e-mail" };
  }
  return { valid: true, message: "" };
}

export function validatePhone(phone) {
  if (!phone) return { valid: true, message: "" };
  // Accepts Polish and international phone formats
  const regex = /^(\+?\d{1,3}[\s-]?)?\(?\d{2,3}\)?[\s-]?\d{3}[\s-]?\d{2,3}[\s-]?\d{0,2}$/;
  if (!regex.test(phone.replace(/\s/g, ""))) {
    return { valid: false, message: "Nieprawidłowy format numeru telefonu" };
  }
  return { valid: true, message: "" };
}
