async function partition(ele, l, r){
    let i = l - 1;
    // color pivot element
    ele[r].style.background = 'red';
    for(let j = l; j <= r - 1; j++){
        ele[j].style.background = 'yellow';
        
        await waitforme(delay);

        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
            i++;
            swap(ele[i], ele[j]);
            ele[i].style.background = 'orange';
            if(i != j) ele[j].style.background = 'orange';
            await waitforme(delay);
        }
        else{
            ele[j].style.background = 'white';
        }
    }
    i++; 
    await waitforme(delay);
    swap(ele[i], ele[r]); 
    
    ele[r].style.background = 'white';
    ele[i].style.background = 'green';

    
    await waitforme(delay);
    
    // color
    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != 'green')
            ele[k].style.background = 'cyan';
    }

    return i;
}

async function quickSort(ele, l, r){
    console.log('In quickSort()', `l=${l} r=${r}`, typeof(l), typeof(r));
    if(l < r){
        let pivot_index = await partition(ele, l, r);
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
            ele[r].style.background = 'green';
            ele[l].style.background = 'green';
        }
    }
}
const sort_quick=document.querySelector('.quick-sort');

sort_quick.addEventListener('click',async function()
{
    console.log('quick sort')
    const arr=document.querySelectorAll('.bar');

    sort_disable();
    size_disable();
    reset_disable();
    await quickSort(arr,0,arr.length-1);
    sort_enable();
    size_enable();
    reset_enable();
});