import Image from "next/image";
import Button from "../components/ui/Button";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center gap-7">
        <h1 className="font-semibold text-5xl">
          Pitch Your Ideas with Confidence
        </h1>
        <p className="text-2xl text-[#555555]">
          Get Honest <span className="text-[#FF7F50] font-bold">Feedback</span>{" "}
          on Your <span className="text-[#FF7F50] font-bold">Pitch</span> in
          Just Minutes
        </p>
      </div>
      <div className="flex justify-center my-16">
        <Button intent="primary">Pitch it!</Button>
      </div>
    </div>
  );
}
