import React, { useEffect, useState } from "react";
const url = "http://localhost:3000/courses";
import axios from "axios";
import { useNavigate } from "react-router";
function Home() {
  const naviget = useNavigate();
  function handelNavigeat(id) {
    naviget(`lenguech/${id}`);
  }
  const [lenguach, setLenguach] = useState([]);
  async function get() {
    try {
      const { data } = await axios.get(url);
      setLenguach(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    get();
  }, []);
  return (
    <div>
      <article className="text-center flex flex-col gap-[20px] mb-[80px]">
        <h1 className="text-5xl font-bold">Курсы Академии</h1>
        <p className="text-sm w-[672px] m-auto">
          Выберите свой путь обучения и развивайте навыки во Frontend, Backend,
          мобильной разработке или начните с нашей программы для детей
        </p>
      </article>
      <div className="flex flex-wrap max-w-[1240px] justify-between gap-[20px] m-auto">
        {lenguach.map((el, index) => (
          <div
            key={index}
            onClick={() => handelNavigeat(el.id)}
            style={{ backgroundColor: el.style.bg }}
            className="group relative w-[390px] h-[256px] cursor-pointer rounded-[32px] p-8 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-4 hover:scale-[1.01]"
          >
            <div
              style={{
                backgroundColor: el.style.main,
                boxShadow: `4px 0 20px ${el.style.glow}`,
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 h-[70%] w-[6px] rounded-r-full transition-all duration-500 group-hover:h-[70%]"
            />

            <div className="flex flex-col h-full justify-between relative z-10">
              <div className="flex justify-between items-start">
                <h2 className="text-[32px] font-bold text-white leading-[1.1] w-[240px]">
                  {el.title}
                </h2>

                <div className="h-16 w-16 flex items-center justify-center rounded-2xl bg-[#00000040] backdrop-blur-md p-3 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <img
                    src={el.image_url}
                    alt={el.title}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              <p className="text-gray-400 text-lg font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                {el.description}
              </p>

              <div className="flex items-center space-x-4">
                <div
                  style={{
                    color: el.style.main,
                    backgroundColor: `${el.style.main}15`,
                  }}
                  className="flex items-center px-4 py-2 rounded-2xl font-bold text-sm"
                >
                  <span className="mr-2">🕒</span>
                  {el.duration}
                </div>

                <span className="text-[11px] font-black text-white/30 uppercase tracking-[3px]">
                  {el.category}
                </span>
              </div>
            </div>

            <div
              style={{ backgroundColor: el.style.main }}
              className="absolute inset-0 -z-0 opacity-0 blur-[100px] transition-opacity duration-700 group-hover:opacity-[0.07] rounded-[32px]"
            />

            <div
              style={{ boxShadow: `0 25px 50px -12px ${el.style.glow}` }}
              className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-[32px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
