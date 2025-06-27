export const isEmailValid = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const getPasswordStrength = (password: string): string => {
  if (password.length < 6) return "Weak";
  if (password.length < 10) return "Moderate";
  return "Strong";
};

export function isPasswordValid(password: string): boolean {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;
  return regex.test(password);
}
