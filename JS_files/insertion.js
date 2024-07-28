// void sort(int arr[])
// {
//     int n = arr.length;
//     for (int i = 1; i < n; ++i) {
//         int key = arr[i];
//         int j = i - 1;

//         /* Move elements of arr[0..i-1], that are
//            greater than key, to one position ahead
//            of their current position */
//         while (j >= 0 && arr[j] > key) {
//             arr[j + 1] = arr[j];
//             j = j - 1;
//         }
//         arr[j + 1] = key;
//     }
// }
async function insertion()
{
    const arr=document.querySelectorAll('.bar');
    for(let i=0; i<arr.length; i++)
    {
        let ht=arr[i].style.height;
        arr[i].style.background='blue';
        let j=i-1;
        await waitforme(delay);
        while(j>-1&&parseInt(arr[j].style.height)>parseInt(ht))
        {
            arr[j+1].style.height=arr[j].style.height;
            arr[j].style.background='orange';
            j=j-1;
            await waitforme(delay);

        }
        arr[i].style.background='orange';
        arr[j+1].style.height=ht;
        for(let j=0;j<arr.length;j++)
        {
            arr[j].style.background='cyan';
        }

    }

}
const sort_insert=document.querySelector('.insertion-sort');

sort_insert.addEventListener('click',async function()
{
    sort_disable();
    size_disable();
    reset_disable();
    await insertion();
    sort_enable();
    size_enable();
    reset_enable();
});