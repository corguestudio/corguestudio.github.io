let s = ['tip', 'progress', 'timeline', 'character', 'access'],
	d = document,
	h = d.head,
	b = d.body,
	c = (n) => d.createElement(n),
	a = (f, n) => f.appendChild(n),
	e = c('link'),
	t = 0,
	w = window;
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
	a(b, e);
};
w.next = () => {
	let v = s[t++];
	let e = c('script');
	e.src = `script/${v}.js`;
	e.defer = true;
	a(h, e);
};
next();