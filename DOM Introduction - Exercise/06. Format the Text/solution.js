function solve() {

  let arr = document.getElementById('input').value.split('.').filter(x => x !== '').map(x => x.trim() + '.');
  let groups = [];
  let group = [];

  for (let i = 0; i < arr.length; i++) {
    group.push(arr[i]);
    if ((i + 1) % 3 === 0) {
      groups.push(group);
      group = [];
    }
  }
  if (group.length !== 0) groups.push(group);
  let output = document.getElementById('output');
  for (let i = 0; i < groups.length; i++) {
    let p = document.createElement('p');
    p.textContent = groups[i].join(' ');
    output.appendChild(p);
  }

}