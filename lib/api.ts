const API_URL = 'http://localhost:5000/api';

export const fetchPosts = async () => {
  const res = await fetch(`${API_URL}/posts`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
};

export const fetchCourses = async () => {
  const res = await fetch(`${API_URL}/courses`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch courses');
  return res.json();
};

export const submitContactForm = async (data: { name: string; email: string; subject: string; message: string }) => {
  const res = await fetch(`${API_URL}/messages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to send message');
  return res.json();
};
