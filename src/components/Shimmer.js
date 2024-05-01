const Shimmer = () => {
    return(
        <div className="Shimmer">
            < input type="text"
            className="Shimmer-search"
            placeholder="Search" />
            <button>Search</button>
            <div className="Shimmer-containers">
                {Array(16).fill("").map((e , index )=>(
                    <div id="box" key={index} ></div>
                ))}
            </div>
        </div>
    );
};

export default Shimmer;