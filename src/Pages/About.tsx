import { WobbleCard } from "../Components/UI/WobbleCard";

const About = () => {
  return (
    <section id="about" className="relative px-4 sm:px-6 md:px-10">
      <h1 className="text-3xl text-center sm:text-4xl md:text-5xl mt-4 md:mt-10 md:pl-24 lg:pl-0 saira-font text-white">
        About Me
      </h1>

      <div className="flex flex-col justify-center items-center w-full max-w-7xl mx-auto mt-6 pb-10 space-y-6">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <WobbleCard containerClassName="flex-1 h-full bg-white/5 min-h-[250px] lg:min-h-[300px] relative">
            <div className="max-w-xs md:max-w-sm">
              <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Aspiring Data Scientist
              </h2>
              <p className="mt-4 text-left text-sm md:text-base text-neutral-200">
                I am a Computer Science student passionate about Data Science 
                and Artificial Intelligence. I enjoy transforming raw data into 
                meaningful insights that drive smart decisions. Using Python, 
                NumPy, Pandas, and Matplotlib, I analyze datasets, visualize trends, 
                and extract valuable patterns. My curiosity pushes me to explore 
                how data can solve real-world problems and create impactful solutions.
              </p>
            </div>
            <img
              src="/image.png"
              alt="data science illustration"
              className="absolute -right-2 md:-right-[15%] lg:-right-[30%] -bottom-6 w-40 sm:w-56 md:w-72 lg:w-96 object-contain rounded-2xl grayscale"
            />
          </WobbleCard>

          <WobbleCard containerClassName="flex-1 min-h-[250px] relative">
            <div>
              <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Analyze. Model. Improve. Repeat.
              </h2>
              <p className="mt-4 max-w-md text-left text-sm md:text-base text-neutral-200">
                I believe in strong fundamentals and disciplined learning. 
                From statistics and probability to machine learning algorithms, 
                I focus on understanding concepts deeply before applying them. 
                I enjoy solving analytical problems, working on real datasets, 
                and continuously refining models to improve performance and accuracy.
              </p>
            </div>
          </WobbleCard>
        </div>

        {/* Bottom Row */}
        <WobbleCard containerClassName="w-full bg-blue-500/10 min-h-[300px] md:min-h-[400px] lg:min-h-[300px] relative">
          <div className="max-w-sm md:max-w-md">
            <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              AI & Machine Learning Explorer
            </h2>
            <p className="mt-4 max-w-md text-left text-sm md:text-base text-neutral-200">
              My goal is to build intelligent systems that learn from data 
              and make accurate predictions. I am currently exploring 
              machine learning, model evaluation, feature engineering, 
              and generative AI. In the future, I aim to work on advanced 
              AI systems, contribute to impactful research, and develop 
              scalable data-driven solutions that create real-world value.
            </p>
          </div>
          <img
            src="/Ai.webp"
            alt="AI illustration"
            className="absolute -right-4 md:-right-[20%] lg:-right-[10%] -bottom-6 w-44 sm:w-60 md:w-80 lg:w-96 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </section>
  );
};

export default About;
