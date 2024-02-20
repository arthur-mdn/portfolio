import Link from "next/link";

function Footer() {

    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split("-");
        return `${day}/${month}/${year}`;
    };

    return (
        <>
            <br/>
            <br/>
            <footer  style={{backgroundColor:"#004500", color:"white"}}>
                <section className={"FS"}>
                    <div className={"FS_container"}>
                        <div className={"FS_content"}>
                            <h2 className={"FS_title"}>Portfolio d'Arthur Mondon.</h2>
                            <p style={{color:"lightgrey"}}>Développeur web FullStack dans le Vaucluse (à Carpentras, Monteux, Aubignan et ses alentours).</p>
                            <br/>
                            <br/>
                            <div className={"fr g3"}>

                                <div>
                                    <h3>Ressources</h3>
                                    <br/>
                                    <div className={"fc g0-5"}>
                                        <Link href={"/rgpd"}>
                                            RGPD
                                        </Link>
                                        <Link href={"/mentions-legales"}>
                                            Mentions légales
                                        </Link>
                                        <Link href={"/sitemap.xml"}>
                                            Sitemap
                                        </Link>

                                    </div>
                                </div>
                                <div>
                                    <h3>Liens</h3>
                                    <br/>
                                    <div className={"fc g0-5"}>
                                        <Link href={"https://www.linkedin.com/in/arthur-mondon-25147b21b/"}>
                                            LinkedIn
                                        </Link>

                                        <Link href={"https://github.com/arthur-mdn"}>
                                            Github
                                        </Link>

                                        <Link href={"/contact"}>
                                            Formulaire de Contact
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <p>
                        Copyright 2023 - Arthur Mondon
                    </p>
                </section>


            </footer>
        </>
    );
}

export default Footer;
