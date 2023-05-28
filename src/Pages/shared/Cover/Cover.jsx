import { Parallax } from 'react-parallax';


const Cover = ({ img, title, details }) => {
    return (


        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[300px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md bg-[#151515] bg-opacity-50 p-10">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">{details}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;