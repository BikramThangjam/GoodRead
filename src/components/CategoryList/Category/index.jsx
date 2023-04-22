import "./Category.css"

const Category = (props)=>{
    const {catId, catName} = props.data
    return (
        <div className="col-sm-3">
            <div className="card">
                <img src="https://placehold.it/400" alt="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title text-center">{catName}</h5>
                </div>
            </div>
        </div>
    )
}

export default Category