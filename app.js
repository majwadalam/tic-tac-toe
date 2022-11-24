let box = document.querySelectorAll('div.box');
let rst = document.querySelector('.btn');
let anc = document.querySelector('.anc');

let arr = ['','','','','','','','','']
let win = false;
var turn = 0;

function checkWin(sym)
{
    for(i = 0; i + 2 < 9; i += 3)
    {
        if(arr[i] == sym && arr[i+1] == sym && arr[i+2] == sym)
        return 1;
    }

    for(i = 0; i < 3; i++)
    {
        if(arr[i] == sym && arr[i+3] == sym && arr[i+6] == sym)
        return 1;
    }

    if(arr[0] == sym && arr[4] == sym && arr[8] == sym)
    return 1;

    if(arr[2] == sym && arr[4] == sym && arr[6] == sym)
    return 1;

    return 0;
}

function winFunc(sym)
{
    anc.innerHTML = "Player " + sym + " Won";
}

function working(bx, s1, s2, p, idx)
{
    bx.innerText = s1;
            anc.innerText = "Player " + s2 + "'s Turn";
            arr[idx] = s1;
            win = checkWin(s1);
            win === 1 ? winFunc(s1) : null;
            bx.classList.add(p);
            turn = !turn;
            return;
}

box.forEach((bx, idx) => {
    bx.addEventListener("click", e =>
    {
        if(bx.innerText == '' && turn == "0" && win == 0)
        {   
           working(bx, 'X', 'O', 'p1', idx)
        }
        if(bx.innerText == '' && turn == "1" && win == 0)
        {   
            working(bx, 'O', 'X', 'p2', idx)
        }
        else{
        }
    })
})

rst.addEventListener('click', e => 
{
    arr = ['','','','','','','','','']
    win = false;
    turn = 0;
    anc.innerHTML = `Player X's turn`;
    box.forEach(bx =>
        {
            bx.innerText = '';
            bx.classList.remove('p1');
            bx.classList.remove('p2');
        })
})
