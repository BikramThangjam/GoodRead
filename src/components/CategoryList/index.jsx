import Category from "../CategoryList/Category";

const CategoryList = () =>{

    const items = [
        {catId: 1, catName: 'Fiction', image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1680273431l/61273342._SY475_.jpg'},
        {catId: 2, catName: 'History', image: 'https://fivebooks.com/app/uploads/books/3/ae/BC_0674249305-209x300.jpg'},
        {catId: 3, catName: 'Science', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1349098526i/9542311.jpg'},
        {catId: 4, catName: 'External Affairs', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348476583i/12849173.jpg'},

    ]

    return (
        <div className="pb-5 pt-5">
            <h2 className="text-center mb-4">All Categories</h2>
            <div className="row">
                {items.map((item, index) => <Category key={index} data={item}/>)}
            </div>
        </div>
    )
}

export default CategoryList