import NFTsGallery from "../../components/NFTsGallery";

const slides = [
  {
    name: "Green dino",
    age: "10 days",
    pic: "assets/dino-slide.png",
  },
  {
    name: "purple dino",
    age: "15 days",
    pic: "assets/dino-slide.png",
  },
  {
    name: "orange dino",
    age: "20 days",
    pic: "assets/dino-slide.png",
  },
  {
    name: "pink dino",
    age: "5 days",
    pic: "assets/dino-slide.png",
  },
];
export default function MyDinos({}) {
  return (
    <div
      id="dinos-page"
      className="w-full h-full flex-grow flex flex-col justify-between "
    >
      <NFTsGallery slides={slides} />
    </div>
  );
}
