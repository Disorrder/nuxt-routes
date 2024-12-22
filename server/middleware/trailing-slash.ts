export default defineEventHandler((event) => {
  const path = event.path || "/";
  console.log("🚀 ~ defineEventHandler ~ path:", path, event);
  if (!path.endsWith("/") && !path.match(/\.[a-zA-Z0-9]+$/)) {
    return sendRedirect(event, `${path}/`, 301);
  }
});
