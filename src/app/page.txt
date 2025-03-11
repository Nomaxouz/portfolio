async function getStrapiData(path: string) {
  const baseUrl = "http://localhost:1337";
  try {
    const res = await fetch(baseUrl + path);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const strapiData = await getStrapiData("/api/home-page");
  console.log(strapiData);
  const { homeTitle, descriptionSectionTilte, descriptionPhoto, descriptionTitle, descriptionContent } = strapiData.data;

  return (
    <main className="container mx-auto py-6">
      <section className="hero">
        <h1 className='text-8xl font-bold'>{ homeTitle }</h1>
      </section>
      <section className="description">
        <h2>{ descriptionSectionTilte }</h2>
        <div className="left">
          <img src={ descriptionPhoto } alt="Photo de Dylan Thomas" />
        </div>
        <div className="right">
          <h3>{ descriptionTitle }</h3>
          <p>{ descriptionContent }</p>
        </div>
      </section>
    </main>
  );
}
