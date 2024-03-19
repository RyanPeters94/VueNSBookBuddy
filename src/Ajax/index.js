export async function getBookList(){
    try{
        const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books')
        const result = await response.json();
        return result; 
    } catch(err){
        console.log(err)
    }
}