import Hero from '../components/Hero';
import ClientsCarousel from '../components/ClientsCarousel';
import ServicesCards from '../components/ServicesCards';
import ProcessSection from '../components/ProcessSection';
import FAQ from '../components/FAQ';

const Home = () => {
    return (
        <>
            <Hero />
            <ClientsCarousel />
            <ServicesCards />
            <ProcessSection />
            <FAQ />
        </>
    );
};

export default Home;
