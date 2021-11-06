import NFTsGallery from "../../components/NFTsGallery";

const slides = [
  {
    name: "Delicate egg",
    age: "10 days",
    pic: "../../assets/eggs/1.png",
  },
  {
    name: "Delicate egg",
    age: "15 days",
    pic: "../../assets/eggs/2.png",
  },
  {
    name: "Delicate egg",
    age: "20 days",
    pic: "../../assets/eggs/3.png",
  },
  {
    name: "Delicate egg",
    age: "5 days",
    pic: "../../assets/eggs/4.png",
  },
  {
    name: "Delicate egg",
    age: "5 days",
    pic: "../../assets/eggs/5.png",
  },
  {
    name: "Delicate egg",
    age: "5 days",
    pic: "../../assets/eggs/6.png",
  },
  {
    name: "Delicate egg",
    age: "5 days",
    pic: "../../assets/eggs/7.png",
  },
  {
    name: "Delicate egg",
    age: "5 days",
    pic: "../../assets/eggs/8.png",
  },
  {
    name: "Delicate egg",
    age: "5 days",
    pic: "../../assets/eggs/9.png",
  },
];
export default function MyEggs({}) {
  return (
    <div
      id="eggs-page"
      className="w-full h-full flex-grow flex flex-col justify-between "
    >
      <NFTsGallery slides={slides} />
    </div>
  );
}
