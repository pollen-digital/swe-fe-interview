export default async function product({ params }: { params: { slug: string } }) {
  const detail = await getDetails(params.slug);

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="flex flex-row gap-2 px-10 py-14 border-2 rounded-xl">
        <img src={detail.big_img} alt={`${detail.artist}_${detail.title}`} className="rounded-xl w-96" />

        <div className="self-end">
          <h1 className="text-2xl font-bold">{detail.title}</h1>

          <h4>By: {detail.artist}</h4>
          <h4>{detail.label_no_country}</h4>
        </div>
      </div>
    </div>
  );
}

interface Detail {
  id: number;
  title: string;
  artist: string;
  label_no_country: string;
  big_img: string;
  slug: string;
}

const getDetails = async (slug: string): Promise<Detail> => {
  const res = await fetch(`https://apinew.soundshelter.net/vinyl/${slug}`);
  const json = await res.json();

  return json.results.details;
};
