import Img1 from "@/shop/assets/home/Img1.png";
import Img2 from "@/shop/assets/home/Img2.png";
import Img3 from "@/shop/assets/home/Img3.png";

export const ImagenesInicio = () => {
    return (
        <div className="px-10 lg:px-40 my-15 grid grid-cols-1 lg:grid-cols-2 gap-1">
            <div >
            <img
                src={Img1}
                alt="Imagen Remo"
                className="w-full h-auto rounded-xl object-contain"
            />
            </div>
            <div>
            <img
                src={Img2}
                alt="Joven Remando"
                className="w-full h-auto rounded-xl object-contain"
            />
            <img
                src={Img3}
                alt="Mujer remando"
                className="mt-1 w-full h-auto rounded-xl object-contain"
            />
            </div>

        </div>
    )
}
