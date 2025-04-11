export default function FoodVideo({videoSrc}) {
    return(
        <div className="flex items-center justify-center">
            <iframe
                width="100%"
                height="400"
                src={videoSrc}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className=" rounded-lg"
            ></iframe>
        </div>
    )
}