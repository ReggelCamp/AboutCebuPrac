import Body from "./_sections/body";
import AboutHeader from "./_sections/header";

export default function Page() {
  return (
    <div className="w-full h-full flex flex-col">
      <AboutHeader />
      <Body />
    </div>
  );
}
