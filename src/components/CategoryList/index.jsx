import Category from "../CategoryList/Category";

const CategoryList = () =>{

    const items = [
        {catId: 1, catName: 'Fiction'},
        {catId: 2, catName: 'History'},
        {catId: 3, catName: 'Science'},
        {catId: 4, catName: 'External Affairs'},

    ]

    return (
        <div className="pb-5">
            <h2 className="text-center mb-4">All Categories</h2>
            <div className="row">
                {items.map(item => <Category data={item}/>)}
            </div>
        </div>
    )
}

export default CategoryList