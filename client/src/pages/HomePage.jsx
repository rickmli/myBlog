import { useEffect, useState } from "react";

function HomePage() {
  const options = [
    { option: "most recent", orderKey: "time" },
    { option: "most commented", orderKey: "comment" },
    { option: "most liked", orderKey: "like" },
  ];
  const sortDescending = useState(true);
  const [orderKey, setOrderKey] = useState(options[0].orderKey);
  const handleOptionSwitch = (option) => {
    setOrderKey(option);
  };

  useEffect(function () {
    const fetchArticles = async () => {
      try {
        const data = await fetch(
          `${import.meta.env.VITE_BACKEND}/articles?orderKey=${orderKey}`,
        );
        const articles = await data.json();
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="mx-auto flex max-w-[960px] gap-4 py-4">
      <aside className="sideSection bg-emerald-700">
        <div>avatar</div>
        <div>comment</div>
        <div>tags</div>
        <div>categories</div>
        <div>website info</div>
      </aside>
      <div className="flex-1 bg-emerald-500 px-8 py-4">
        <ul className="flex gap-4 bg-emerald-300">
          {options.map(({ option, orderKey }, index) => (
            <span
              key={`homePageViewOption--${index}`}
              className="cursor-pointer capitalize"
              onClick={() => handleOptionSwitch(orderKey)}
            >
              {option}
            </span>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
