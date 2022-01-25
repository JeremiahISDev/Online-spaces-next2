import {Free, PersonalPro, Enterprise} from "../components/Pricing Cards/index";
export default function Pricing() {
  return (
    <div className="h-screen">
      <div className="container">
        <div className="cards flex justify-center place-items-center p-4 px-[20px] gap-x-10">
          <Free/>
          <PersonalPro/>
          <Enterprise/>
        </div>
      </div>
    </div>
  );
}