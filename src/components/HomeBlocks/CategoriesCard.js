import React from 'react'

const CategoriesCard = () => {
    const divStyle = {
        backgroundImage: 'url(http://intecbrussel.be/media/1046/close-up-code-coding-160107.jpg)',
        backgroundSize: 'cover'
    };
    return (
        // <div className="row text-white categoriescard">
        //         <div className="col-sm-4 bg-secondary p-5 border-right text-center" style={divStyle}>
        //         <h1 className="">Box</h1>
        //         </div>

        //     </div>
        <div className="col-sm-4 bg-secondary p-5 border-right text-center" style={divStyle}>
            <h1 className="text-white">Box</h1>
        </div>
    )
}

export default CategoriesCard;