import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";

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
    <div style={{ display: "flex", minHeight: "100vh", background: "#f3f4f6" }}>
      
      {/* SIDEBAR */}
      <aside
        style={{
          width: "260px",
          backgroundColor: "#1e3a8a",
          color: "white",
          padding: "24px",
        }}
      >
        <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "24px" }}>
          Booking App
        </h2>
        <Sidebar />
      </aside>

      {/* MAIN CONTENT */}
      <main style={{ flex: 1, padding: "32px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "24px" }}>
          Profile
        </h1>

        <form
          onSubmit={handleSave}
          style={{
            background: "white",
            padding: "24px",
            borderRadius: "10px",
            maxWidth: "500px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
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
              style={buttonStyle}
            >
              Edit Profile
            </button>
          ) : (
            <button type="submit" style={buttonStyle}>
              Save Changes
            </button>
          )}
        </form>
      </main>
    </div>
  );
}

/* INPUT FIELD COMPONENT */
function Field({ label, textarea, ...props }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <label style={{ display: "block", marginBottom: "6px", fontWeight: "500" }}>
        {label}
      </label>
      {textarea ? (
        <textarea
          {...props}
          rows="3"
          style={inputStyle}
        />
      ) : (
        <input {...props} style={inputStyle} />
      )}
    </div>
  );
}

/* STYLES */
const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #d1d5db",
};

const buttonStyle = {
  marginTop: "10px",
  padding: "10px 18px",
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};
