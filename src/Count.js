export const getCount = (list) =>{
    const getCompletedCount = () =>{
        let c = 0;
        list.map((e,i)=>{
            if(e.isDone) c+=1;
        })
        return c;
    }

    const getActiveCount = () =>{
        let c = 0;
        list.map((e,i)=>{
            if(!e.isDone) c+=1;
        })
        return c;
    }
    const count = {
        all:list.length,
        active : getActiveCount(),
        completed : getCompletedCount()
    }

    return count;
}