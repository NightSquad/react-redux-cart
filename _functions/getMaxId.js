export default function getMaxId(array) {
    if (array.length == 0) return 1
    const arr = array.map(el => parseInt(el.cartId, 10))
    arr.sort((a,b) => b-a)
    return arr[0] + 1
}