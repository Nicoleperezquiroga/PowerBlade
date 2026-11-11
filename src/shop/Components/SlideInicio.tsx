import "../css/home.css";
import fondoPowerblade from "./../assets/home/slideInicio.png";
import { Button } from '@/components/ui/button';


interface Props {
    title: string;
    subTitle?: string;
}

export const SlideInicio = ({ title, subTitle }: Props) => {
    const defaultSubTitle = "Productos y servicio de calidad."
    return (
        <div className='w-full'>      {/* Hero Section */}
            <section className="relative w-full bg-center bg-no-repeat flex items-center justify-center flex-col "
                style={{
                    backgroundImage: `url(${fondoPowerblade})`,
                    backgroundSize: "100% 100%",
                    aspectRatio: "1920 / 800",
                }}>

                <p className=" font-montserrat text-xl max-w-2xl text-white">
                    {subTitle || defaultSubTitle}
                </p>
                <h1 className="font-montserrat text-2xl lg:text-5xl tracking-tight text-white font-bold">
                    {title}
                </h1>
                <div className='mt-10'>
                    <Button variant="outline" className="rounded-full mr-3 font-bold">Compra Ahora</Button><Button className="rounded-full font-bold" variant="outline">Contáctanos</Button>
                </div>

            </section>
        </div>
    )
}
