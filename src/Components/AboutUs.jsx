export default function AboutUs() {
    return (
        <>
            <section className="grid xl:grid-cols-2 items-center justify-items-center gap-4 text-white">
                <article className="animate-fade-right max-w-xl">
                    <h2 className="text-5xl font-bold font-exo2">About Us</h2>
                    <p className="text-xl max-w-xl	font-grotesk mt-4">
                        HackHayward, hosted at California State University, East
                        Bay, is the first collegiate hackathon in the Hayward,
                        California area. We challenge students to work
                        collaboratively within a limited timeframe to ideate,
                        create, and pitch their solutions to tackle real-world
                        issues within a 24-hour timeframe. Our hackathon will be
                        hosted in person at California State University, East
                        Bay during Spring 2025, and we are expecting over 200
                        participants.
                    </p>
                </article>
                <div className="">
                    <img
                        src="./assets/Scene2/s2Full.png"
                        className="rounded-md shadow-lg shadow-cyan-500/50"
                    />
                </div>
            </section>
            <section className="grid xl:grid-cols-2 items-center justify-items-center gap-4 text-white mt-4">
                <div className="">
                    <img
                        src="./assets/Scene3/s3Full.png"
                        className="rounded-md shadow-lg shadow-cyan-500/50"
                    />
                </div>
                <article className="animate-fade-left row-start-1 row-end-2 xl:col-start-2 xl:col-end-3 max-w-xl">
                    <h2 className="text-5xl font-bold font-exo2">
                        Our Mission
                    </h2>
                    <p className="text-xl font-grotesk mt-4">
                        Our mission is to empower underrepresented students
                        passionate about technology by providing hands-on
                        learning experiences, networking opportunities, and
                        innovative project development through hackathons. We
                        aim to pave the way for their success in the evolving
                        technological landscape by offering comprehensive skill
                        development and professional connections.
                    </p>
                </article>
            </section>
        </>
    );
}
