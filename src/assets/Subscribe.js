
export default class Subscribe{
    $ponds = [];

    $on(fn){
        let $ponds = this.$ponds;
        if(!$ponds.includes(fn)){
            $ponds.push(fn)
        }
    }

    $emit(...args){
        this.$ponds.forEach(item => {
            if(typeof item === 'function'){
                item(...args)
            }
        })
    }
}
