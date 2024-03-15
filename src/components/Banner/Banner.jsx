import { motion, useScroll } from "framer-motion";
const Banner = () => {
    const { scrollYProgress } = useScroll();
    return (
        <div>
            <motion.div style={{ scaleX: scrollYProgress }} className="fixed top-0 left-0 right-0 h-[6px] bg-indigo-600 origin-[0%] z-10" />
            <div className="hero min-h-screen bg-base-200 bg-gradient-to-l from-indigo-500 to-indigo-100 ">
                <div className="hero-content flex-col lg:flex-row gap-5">
                    <motion.div
                        animate={{ y: 0 }}
                        initial={{ y: 100 }}
                        transition={{ type: "spring", stiffness: 50 }}>
                        <img src="https://i.ibb.co/jRkg4Wm/image.png" className="sm:max-w-md max-w-xs rounded-lg shadow-2xl" />
                    </motion.div>
                    <motion.div
                        animate={{ y: 0 }}
                        initial={{ y: -100 }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        <h1 className="text-4xl font-bold text-white">Inspired Insights: Navigating Life <br></br> Through Words</h1>
                        <p className="py-6">Explore a world of creativity and wisdom on our blogging platform. From thought-provoking articles to insightful personal essays, dive into the minds of talented writers who share their unique perspectives on life, love, and everything in between..</p>
                        <button className="btn btn-primary">Read Blogs</button>
                    </motion.div>
                </div>
            </div>
        </div >
    );
};

export default Banner;