let count = document.getElementById('count')
const btns = document.querySelectorAll('.btn');


let sum = 0;
btns.forEach((btn)=>{
 btn.addEventListener('click', function (e){
  const styles = e.currentTarget.classList;
  if(styles.contains('decrease')) {
    sum--;
  }
  else if(styles.contains('increase')) {
    sum++;
  }
  else if(styles.contains('reset')) {
    sum = 0;
  }
  count.textContent = sum;
 });
})