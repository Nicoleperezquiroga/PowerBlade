interface Props {
    title: string;
    subTitle?: string;
}
export const CustomJumbotron = ({title, subTitle}:Props) => {
    const defaultSubTitle = "Productos y servicio de calidad."
    return (
        <div>      {/* Hero Section */}
            <section className="pt-20 pb-10 px-4 lg:px-8">
                <div className="container mx-auto text-center">
                    <h1 className="font-montserrat text-2xl lg:text-4xl tracking-tight mb-6">
                        {title}
                    </h1>
                    <p className=" font-montserrat text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        {subTitle || defaultSubTitle}
                    </p>
                </div>
            </section>
        </div>
    )
}
