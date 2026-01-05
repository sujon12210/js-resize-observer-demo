const box = document.getElementById('box');
const info = document.getElementById('info');

const observer = new ResizeObserver(entries=>{
  for(const entry of entries){
    const { width, height } = entry.contentRect;
    info.innerText = `Width: ${Math.round(width)}, Height: ${Math.round(height)}`;
  }
});

observer.observe(box);
