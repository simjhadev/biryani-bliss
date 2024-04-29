
const LFeatured = () => {
    return(
        <div className="w-full min-h-[100vh] grid overflow-x-scroll">
            {/****** Wrapper */}
            <div className="flex w-max self-center">
                {/***** Single Item */}
                {[1,2,3].map((item)=>(
                    <div key={"LF"+item} className="flex flex-col items-center justify-around w-screen md:w-[50vw] xl:w-[33vw] p-4 h-[70vh] hover:bg-primaryLite transition-all duration-300">
                    {/************* Image container */}
                    <div className="relative flex-1 w-full bg-gray-100">
                    
                    </div>
                    
                    <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
                        <hr className="h-5 w-[200px] bg-gray-100"/>
                        <hr className="h-5 w-[300px] bg-gray-100 p-4 2xl:p-8"/>
                        <hr className="h-5 w-[100px] bg-gray-100"/>
                        <hr className="h-8 w-[150px] bg-gray-100 p-2 rounded-md" />
                    </div>
                    </div>
                ))}
                
            </div>
        </div>
    );
}

export default LFeatured;
