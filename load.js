const ua = navigator.userAgent;
if (!/Chromium|Chrome/.test(ua)) alert('使用非 Chromium 的浏览器，可能会出现问题。');
let s = ['tip', 'progress', 'timeline', 'character', 'access'], d = document, h = d.head, b = d.body, c = (n) => d.createElement(n), a = (f, n) => f.appendChild(n), e = c('link'), t = 0, w = window;
e.rel = 'stylesheet';
e.href = 'index.css?v=0';
e.defer = true;
a(h, e);
w.add = (l, i, t, s) => {
	let e = c('div');
	e.className = 'card';
	e.id = i;
	e.innerHTML = `
<div class="header">
	<h3>${t}</h3>
	<p class="subtitle">${s}</p>
</div>${l}`;
	return a(b, e);
};
w.next = () => {
	if (t === s.length) return;
	let e = c('script');
	e.src = `script/${s[t++]}.js`;
	e.defer = true;
	a(h, e);
};
next();