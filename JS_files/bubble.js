async function  bubble()
{
    console.log("bubble")
    const arr=document.querySelectorAll(".bar")
    for (let i=0; i<arr.length;i++)
    {
        for(let j=0;j<arr.length-1-i;j++)
        {
            arr[j].style.background='red';
            arr[j+1].style.background='blue';
            await waitforme(delay);
            if(parseInt(arr[j].style.height)>parseInt(arr[j+1].style.height))
            {
                
                swap(arr[j], arr[j+1]);
            }
            arr[j+1].style.background='cyan';
            arr[j].style.background='cyan';


        }
        arr[arr.length-1-i].style.background='orange';
    }
    arr[0].style.background='orange';
    for(let j=0;j<arr.length;j++)
        {
            arr[j].style.background='cyan';
        }

}
const sort_bubble=document.querySelector('.bubble-sort');
sort_bubble.addEventListener('click',async function()
{
    sort_disable();
    size_disable();
    reset_disable();
    await bubble();
    sort_enable();
    size_enable();
    reset_enable();
});
