var e=document.querySelectorAll("tr");e.forEach(function(t,l){var n=t.cells[1].textContent;if(0===l||l===e.length-1){var r=document.createElement("th");r.textContent=n,t.insertBefore(r,t.cells[t.cells.length-1])}else{var c=document.createElement("td");c.textContent=n,t.insertBefore(c,t.cells[t.cells.length-1])}});
//# sourceMappingURL=index.5d88b9f4.js.map
