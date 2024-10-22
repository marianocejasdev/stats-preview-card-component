import imageMobile from '../assets/images/image-header-mobile.webp';
import imageDesktop from '../assets/images/image-header-desktop.webp';

const stats = [
    { value: '10k+', label: 'Companies' },
    { value: '314', label: 'Templates' },
    { value: '12M+', label: 'Queries' },
];

export default function Card() {
    return (

        <article className="max-w-[327px] h-[780px] bg-desaturated-blue rounded-lg overflow-hidden grid md:grid-cols-2 md:max-w-[1110px] md:h-[446px] shadow-3xl">

            <figure className='bg-soft-violet md:order-2 h-[240px] md:h-full'>
                <img
                    className='w-full h-full object-cover opacity-75 mix-blend-multiply'
                    src={imageMobile}
                    srcSet={`${imageDesktop} 768w, ${imageMobile} 320w`}
                    sizes="(max-width: 768px) 320px, 768px"
                    alt="Descripción de la imagen"
                />
            </figure>

            <div className="flex flex-col text-center p-8 gap-10 md:gap-[72px] text-white items-center justify-center">
                <div className='flex flex-col gap-4 md:gap-6'>
                    <h1 className='text-3xl md:text-4xl font-bold leading-8'>
                        Get <span className='text-soft-violet'>insights</span> that help your business grow.
                    </h1>
                    <p className='text-base leading-6 opacity-75'>
                        Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.
                    </p>
                </div>

                <section className="flex flex-col md:flex-row gap-6 md:gap-16">
                    {stats.map(stat => (
                        <div key={stat.label} className="flex flex-col md:items-start gap-1">
                            <h2 className='text-2xl font-bold'>{stat.value}</h2>
                            <p className='font-lexend-deca text-xs leading-5 tracking-wide uppercase opacity-60'>{stat.label}</p>
                        </div>
                    ))}
                </section>
            </div>
        </article>
    );
}
