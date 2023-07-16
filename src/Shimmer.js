const Shimmer = () => {
    return (
        <div className="restaurant-list">
          {Array(10).fill().map(e=> <div className="shimmerCard"></div>)}
        </div>
       
    ) 
};

export default Shimmer;