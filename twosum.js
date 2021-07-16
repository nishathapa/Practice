const twoSum = (nums, target) => {
    let storage = {}
    for(let [index, num] of nums.enteries()){
        if(storage[num] !== undefined) return [storage[num], index];
            storage[target-sum] = index;
    }
}

twoSum(9, [2,3,4,5,6])