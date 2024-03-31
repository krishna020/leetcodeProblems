function Sum(nums,target)
{
   let map=new Map();
   for(let i=0;i<nums.length;i++)
   {
     let sub=target-nums[i]
     if(map.has(sub))
     {
        return [map.get(sub),i]
     }
     map.set(nums[i],i)
   }
}
let nums=[1,4,2,3,5,6,4,5,7,6,8,9,7,5,6,4]
let target=10

console.log(Sum(nums,target))