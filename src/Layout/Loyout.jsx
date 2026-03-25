import React from "react";
import Home from "../page/Home";
import { Outlet,Link } from "react-router";
import { Button } from "antd" 
import rus from "../assets/russia.png"
import soft from "../assets/softClub.png"
function Loyout() {
  return (
    <div className="min-h-screen w-full bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(30,58,138,0.5),rgba(255,255,255,0))] text-white " >
      <div className="flex gap-[20px] items-cente justify-between max-w-[1240px] m-auto p-[10px]">
        <div className="text-blue-300 flex items-center gap-[20px]">
        <img src={soft} alt="Logo" width={100} />
            <Link to={"/"}>Home</Link>

        </div>
        <div>
          <Button variant="link" color="blue" ><img src="" alt="" /><img src={rus} alt="" /><p>RU</p></Button>
        <Button variant="link" color="blue" ><img src="" alt="" />Войти</Button>
        </div>
      </div>
<section>
  
      <Outlet/>
  </section>
    </div>
  );
}

export default Loyout;
