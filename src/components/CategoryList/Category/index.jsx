import "./Category.css"

const Category = (props)=>{
    const {catId, catName, image} = props.data
    return (
        <div className="col-sm-3">
            <div className="card">
                <img src={image} alt="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title text-center">{catName}</h5>
                </div>
            </div>
        </div>
    )
}

export default Category