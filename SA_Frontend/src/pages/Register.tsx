import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import {
  isEmailValid,
  isPasswordValid,
  getPasswordStrength,
} from "../utils/validation";
import { toast } from "react-toastify";
import { fetchAPI } from "../utils/api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, []);
  const handleRegister = async () => {
    if (!isEmailValid(email)) return toast.error("Invalid email");
    if (!isPasswordValid(password))
      return toast.error(
        "Password must contain at least 1 lowercase, 1 uppercase, 1 number, 1 special character and be at least 8 characters long"
      );
    if (password !== confirm) return toast.error("Passwords do not match");
    try {
      await fetchAPI("/auth/register", "POST", { name, email, password });
      toast.success("Registration successful");
      navigate("/");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-blue-500">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <input
          className="w-full mb-4 px-4 py-2 border rounded"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full mb-4 px-4 py-2 border rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="relative mb-4">
          <input
            className="w-full px-4 py-2 border rounded pr-10"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="absolute top-2.5 right-3 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5 text-gray-500" />
            ) : (
              <EyeIcon className="h-5 w-5 text-gray-500" />
            )}
          </span>
          {password && (
            <p className="text-sm mt-1 text-gray-500">
              Strength:{" "}
              <span
                className={
                  getPasswordStrength(password) === "Weak"
                    ? "text-red-500"
                    : getPasswordStrength(password) === "Moderate"
                    ? "text-yellow-500"
                    : "text-green-600"
                }
              >
                {getPasswordStrength(password)}
              </span>
            </p>
          )}
        </div>

        <div className="relative mb-4">
          <input
            className="w-full px-4 py-2 border rounded pr-10"
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            onCopy={(e) => e.preventDefault()}
            onPaste={(e) => e.preventDefault()}
          />
          <span
            className="absolute top-2.5 right-3 cursor-pointer"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? (
              <EyeSlashIcon className="h-5 w-5 text-gray-500" />
            ) : (
              <EyeIcon className="h-5 w-5 text-gray-500" />
            )}
          </span>
        </div>

        <button
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          onClick={handleRegister}
        >
          Register
        </button>
        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <a href="/" className="text-green-500">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
