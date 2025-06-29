import { useEffect, useState } from "react";
import { fetchAPI } from "../utils/api";
import { toast } from "react-toastify";

interface Student {
  _id?: string;
  name: string;
  email: string;
  course: string;
  status: string;
}

export default function Dashboard() {
  const [students, setStudents] = useState<Student[]>([]);
  const [form, setForm] = useState<Student>({
    name: "",
    email: "",
    course: "",
    status: "active",
  });

  const fetchStudents = async () => {
    const res = await fetchAPI("/students/", "GET", null, true);
    setStudents(await res.json());
  };

  const addStudent = async () => {
    if (!form.name || !form.email || !form.course || !form.status) {
      toast.warn("All fields are required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.warn("Please enter a valid email address");
      return;
    }
    const res = await fetchAPI("/students/", "POST", form, true);

    if (res.ok) {
      setForm({ name: "", email: "", course: "", status: "" });
      fetchStudents();
    } else {
      const err = await res.json();
      toast.error(err.error || "Error adding student");
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [students, setStudents]);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
          }}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-md mb-6">
        <h3 className="text-lg font-semibold mb-2">Add Student</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="border p-2 rounded"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            className="border p-2 rounded"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            className="border p-2 rounded"
            placeholder="Course"
            value={form.course}
            onChange={(e) => setForm({ ...form, course: e.target.value })}
          />
          <select
            className="border p-2 rounded"
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            <option value="active">active</option>
            <option value="inactive">inactive</option>
          </select>
        </div>
        <button
          onClick={addStudent}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Student
        </button>
      </div>

      <h3 className="text-lg font-semibold mb-2">All Students</h3>
      <table className="w-full border mt-2">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Course</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s._id}>
              <td className="border p-2">{s.name}</td>
              <td className="border p-2">{s.email}</td>
              <td className="border p-2">{s.course}</td>
              <td className="border p-2">{s.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
