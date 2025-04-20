const BASE_URL = "http://192.168.0.156:3000/api/profiles";

export const getProfiles = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error("Failed to fetch profiles");
  return await response.json();
};

export const saveProfile = async (formData, editId) => {
  const method = editId ? "PUT" : "POST";
  const url = editId ? `${BASE_URL}/${editId}` : BASE_URL;

  const response = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (!response.ok) throw new Error("Save failed");
  return await response.json();
};

export const deleteProfile = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) throw new Error("Delete failed");
  return await response.json();
};
