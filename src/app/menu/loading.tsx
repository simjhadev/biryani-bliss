const Loading = () => {
    return(
        <div className="p-4 lg:px-20 xl:px-40 lg:h-[calc(100vh-9rem)] flex gap-10 flex-col lg:flex-row items-center">
        
    
           {[1,2,3].map((i)=>(
                <div 
                className="w-[100vw] h-[50vw] md:w-[40vw] md:h-[40vw] lg:w-full lg:h-[50vh] flex rounded-lg justify-center bg-gray-100" 
                key={"category"+i}>
                <hr className="h-8 w-[150px] bg-gray-100 p-2 rounded-md" />
                </div>
           ))} 
        </div>
    );
}

export default Loading;