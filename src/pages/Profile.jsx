import { useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";

export default function Profile() {
  const [profile, setProfile] = useState({
    name: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "9876543210",
    address: "Flat 203, Green Residency, Hyderabad",
  });

  const [editing, setEditing] = useState(false);

  function handleChange(e) {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  }

  function handleSave(e) {
    e.preventDefault();
    setEditing(false);
    alert("Profile updated (UI only)");
  }

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">Profile</h1>

      <form
        onSubmit={handleSave}
        className="bg-white p-6 rounded-xl shadow max-w-lg"
      >
        <Field
          label="Full Name"
          name="name"
          value={profile.name}
          onChange={handleChange}
          disabled={!editing}
        />

        <Field
          label="Email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          disabled={!editing}
        />

        <Field
          label="Phone"
          name="phone"
          value={profile.phone}
          onChange={handleChange}
          disabled={!editing}
        />

        <Field
          label="Address"
          name="address"
          value={profile.address}
          onChange={handleChange}
          disabled={!editing}
          textarea
        />

        {!editing ? (
          <button
            type="button"
            onClick={() => setEditing(true)}
            className="mt-4 bg-blue-600 text-white px-5 py-2 rounded"
          >
            Edit Profile
          </button>
        ) : (
          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white px-5 py-2 rounded"
          >
            Save Changes
          </button>
        )}
      </form>
    </DashboardLayout>
  );
}

/* INPUT FIELD COMPONENT */
function Field({ label, textarea, ...props }) {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">
        {label}
      </label>

      {textarea ? (
        <textarea
          {...props}
          rows="3"
          className="w-full p-2 border rounded"
        />
      ) : (
        <input
          {...props}
          className="w-full p-2 border rounded"
        />
      )}
    </div>
  );
}
