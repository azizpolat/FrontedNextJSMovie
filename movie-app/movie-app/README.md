dark mode için = https://www.npmjs.com/package/next-themes

.then((res) => res.json())
.then((res) => {
console.log("API Yanıtı:", res);
return res;
})
.catch((err) => {
console.error("API Hatası:", err);
return null;
});

console.log("data:", data);
