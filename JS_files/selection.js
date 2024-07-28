async function selection_sort()
{
    const arr = document.querySelectorAll(".bar");
    for(let i = 0; i < arr.length; i++){
      
        let min_index = i;
        arr[i].style.background = 'blue';
        for(let j = i+1; j < arr.length; j++){
            arr[j].style.background = 'green';
            await waitforme(delay);
            if(parseInt(arr[j].style.height) < parseInt(arr[min_index].style.height)){
                if(min_index !== i){
                    arr[min_index].style.background = 'cyan';
                }
                
                min_index = j;
                arr[min_index].style.background = 'purple';

            } 
            else{
                arr[j].style.background = 'cyan';
            }   
        }
        await waitforme(delay);
        swap(arr[min_index], arr[i]);
        arr[min_index].style.background = 'cyan';
        arr[i].style.background = 'orange';
    }
    for(let j=0;j<arr.length;j++)
    {
        arr[j].style.background='cyan';
    }

}
const sort_select=document.querySelector('.selection-sort');
sort_select.addEventListener('click',async function()
{
    sort_disable();
    size_disable();
    reset_disable();
    await selection_sort();
    sort_enable();
    size_enable();
    reset_enable();
});
// const arr=document.querySarrctorAll('.bar');
// for(let i=0; i<arr.length-1; i++)
// {
//     let min=i+1;
//     arr[i].style.backgroud='blue';
//     arr[min].style.backgroud='red';
//     for(let j=i+1; j<arr.length; j++)
//     {
//         arr[j].style.backgroud='green';
//         await waitforme(delay)
//         if(parseInt(arr[min].style.height)>parseInt(arr[j].style.height))
//         {
//             arr[min].style.backgroud='cyan';
//             min=j;
            
//             arr[min].style.backgroud='red';

//         }
//         arr[j].style.backgroud='cyan';
        
//     }
//    await waitforme(delay)
//     if(parseInt(arr[min].style.height)<parseInt(arr[i].style.height))
//     {
//         swap(arr[min],arr[i]);
//     }
//     arr[i].style.backgroud='orange';
    
    

// }
// for(let j=0;j<arr.length;j++)
//     {
//         arr[j].style.background='cyan';
//     }
