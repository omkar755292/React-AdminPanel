import React from 'react'

const DashbordInfo = (props) => {
    return (
        <div>
            {props.infoPage ?
                <div>
                    <div class="card mb-2" style={{ width: " 18rem;" }}>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card mb-2" style={{ width: " 18rem;" }}>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div> : ''
            }
        </div >
    )
}

export default DashbordInfo