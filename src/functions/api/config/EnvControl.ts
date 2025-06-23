export default function EnvControl() {
  return import.meta.env.VITE_API_URL
    ? import.meta.env.VITE_API_URL
    : "not found";
}
